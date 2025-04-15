import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ 
  subsets: ['latin'],
  weight: ['400', '600', '800']
});

export const metadata: Metadata = {
  title: 'Fametonic - Turn Social Media Into a Profitable Career',
  description: 'Discover your way to success with Fametonic. Start growing your influence right away with AI-powered tools and expert-led courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}