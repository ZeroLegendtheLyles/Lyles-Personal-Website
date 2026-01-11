import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lyle Zhang | Researcher & Developer',
    template: '%s | Lyle Zhang',
  },
  description: 'Personal website of Lyle Zhang - showcasing research, publications, and projects in computer science.',
  keywords: ['computer science', 'research', 'publications', 'software development'],
  authors: [{ name: 'Lyle Zhang' }],
  creator: 'Lyle Zhang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lyle-zhang.vercel.app',
    title: 'Lyle Zhang | Researcher & Developer',
    description: 'Personal website showcasing research, publications, and projects',
    siteName: 'Lyle Zhang',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyle Zhang | Researcher & Developer',
    description: 'Personal website showcasing research, publications, and projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
