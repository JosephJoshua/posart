import { FC, PropsWithChildren } from 'react';
import { Poppins } from 'next/font/google';
import { SupabaseProvider } from '@/core/components/SupabaseProvider';

import './globals.css';
import Header from '@/core/components/Header';
import Footer from '@/core/components/Footer';

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
        <SupabaseProvider>
          <Header />
          {children}
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
