import { FC, PropsWithChildren } from 'react';

export type AuthLayoutProps = PropsWithChildren;

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 flex justify-center items-center h-screen">
      <main className="w-[400px] h-[312px] bg-white rounded-xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-8">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
