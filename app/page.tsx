"use client";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <h1 className="px-2 pt-8 text-3xl">Hello, Lego Dude!</h1>
      <p className="px-2 md:text-2xl">
        Feel free to log to your shelf or search the whole library. Whatever you
        do, have fun!
      </p>
      <div className="h-screen bg-hero-pattern bg-cover bg-center">
        <Search />
      </div>
    </>
  );
}
