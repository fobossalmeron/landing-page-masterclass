import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Construye un MVP en 3 horas | Guía y tutorial gratis- Acueducto',
  description: 'Aprende a lanzar un MVP en tiempo récord con nuestro tutorial paso a paso y descarga gratis la guía "Diseña productos digitales como un pro".',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
