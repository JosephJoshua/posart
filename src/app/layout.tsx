import { FC, PropsWithChildren } from 'react';
import './globals.css';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Posart',
  description: '',
};

export type RootLayoutProps = PropsWithChildren;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
