import React from 'react';
import RootLayout from '@/components/RootLayout';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default Layout;