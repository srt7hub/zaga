import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <div className="grain-overlay" />
      <Navbar />
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
