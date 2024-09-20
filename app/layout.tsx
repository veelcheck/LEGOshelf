import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lego Shelf',
  description:
    'Create your virtual LEGO Collection, discover new builds and never again forget what you already own. Have fun with your brick!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased flex flex-col sm:justify-between container mx-auto font-mono min-h-screen'>
        <header className='bg-lego-yellow gap-4 sm:gap-0 py-6 px-10 flex flex-col sm:flex-row justify-between items-center'>
          <p className='text-lego-red text-4xl w-fit font-bold border border-lego-red p-4 rounded'>
            LEGOshelf
          </p>
          <button className='bg-black text-white font-bold p-4 rounded-md text-2xl'>
            Your shelf
          </button>
        </header>
        {children}
        <footer className='border-t-2 border-lego-red py-6 flex flex-col gap-2 sm:flex-row items-center justify-end'>
          <a
            href='https://agnieszka-wilczek.netlify.app'
            target='_blank'
            className='bg-lego-red text-white p-2 rounded-md mr-2'>
            &#169; Veelcheck 2024
          </a>
          I made this and it's my precious.
        </footer>
      </body>
    </html>
  );
}
