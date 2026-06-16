import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { QuoteModalProvider } from '@/lib/quote-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

// Load Inter and Outfit variables
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Boiler LLC | Corporate Engineering & Industrial Boiler Systems',
  description: 'The Boiler LLC provides premium industrial boiler installations, maintenance, mechanical designs, energy efficiency consulting, and 24/7 critical system support in Atlanta, Georgia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-brand-dark text-brand-light font-sans antialiased selection:bg-brand-orange selection:text-brand-dark min-h-screen flex flex-col" suppressHydrationWarning>
        <QuoteModalProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
