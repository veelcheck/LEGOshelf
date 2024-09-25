"use client";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="space-y-2 py-6 text-center sm:space-y-10">
      <h1 className="px-2 text-3xl">Hello, Lego Dude!</h1>
      <p className="px-2 md:text-2xl">
        Feel free to log to your shelf or search the Brickpit. Whatever you do,
        have fun!
      </p>
      <div className="bg-hero-pattern bg-cover bg-center">
        <Search />
      </div>
    </main>
  );
}
