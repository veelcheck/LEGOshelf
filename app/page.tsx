'use client';
import Search from '@/components/search';

export default function Home() {
  return (
    <main className='text-center py-6 space-y-2 sm:space-y-10'>
      <h1 className='text-3xl px-2'>Hello, Lego Dude!</h1>
      <p className='text-2xl px-2'>
        Feel free to log to your shelf or browse the Lego Brickpit. Whatever you
        do, have fun!
      </p>
      <div className='bg-hero-pattern bg-cover bg-center h-64 md:h-[600px]'>
        <Search />
      </div>
    </main>
  );
}
