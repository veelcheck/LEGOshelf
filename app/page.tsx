"use client";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="space-y-2 py-6 text-center sm:space-y-10">
      <h1 className="px-2 text-3xl">Hello, Lego Dude!</h1>
      <p className="px-2 text-2xl">
        Feel free to log to your shelf or browse the Lego Brickpit. Whatever you
        do, have fun!
      </p>
      <div className="h-64 bg-hero-pattern bg-cover bg-center md:h-[600px]">
        <Search />
      </div>
    </main>
  );
}
