import Footer from '@/core/components/Footer';
import Header from '@/core/components/Header';
import { FC, PropsWithChildren } from 'react';

export type MarketplaceLayoutProps = PropsWithChildren;

const MarketplaceLayout: FC<MarketplaceLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MarketplaceLayout;
