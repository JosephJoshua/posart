create table public.profiles (
  user_id uuid not null references auth.users on delete cascade,
  full_name text not null,
  is_seller boolean default false,
  avatar_url text,

  primary key (user_id)
);

alter table public.profiles enable row level security;

create policy "User profiles are viewable by everyone."
  on public.profiles for select
  using (true);
  
create policy "Users can insert their own profiles."
  on public.profiles for insert
  with check(auth.uid() = user_id);
  
create policy "Users can update their own profiles."
  on public.profiles for update
  with check(auth.uid() = user_id);
  
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (user_id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'avatar_url');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
