type Environment = {
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  NEXTAUTH_URL?: string;
  VERCEL?: '1';
  NODE_ENV?: 'development' | 'production' | 'test';
  TZ?: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}

export default Environment;
