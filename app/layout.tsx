import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'

const acueductoFont = localFont({
  src: [
    {
      path: '../public/fonts/300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/400.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/500.woff2',
      weight: '500', 
      style: 'normal',
    }
  ]
})

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
      <body className={acueductoFont.className}>
        <main className="min-h-svh flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
