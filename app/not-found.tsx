import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='text-center px-10 py-6 h-screen sm:h-auto'>
      <h1>404 | Page not found</h1>
      <p className='pb-6'>Could not find requested resources.</p>
      <Link
        href='/'
        className='bg-blue-600 px-4 py-2 rounded-md text-white'>
        Home Shelf
      </Link>
    </main>
  );
}
