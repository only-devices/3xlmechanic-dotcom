import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define fonts
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: '3XL Mechanic',
  description: 'Automotive repair tutorials and tips from 3XL Mechanic',
  metadataBase: new URL('https://3xlmechanic.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}