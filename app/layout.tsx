import type { Metadata } from "next";
import "./globals.css";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lego Shelf",
  description:
    "Create your virtual LEGO Collection, discover new builds and never again forget what you already own. Have fun with your brick!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto flex min-h-screen flex-col font-mono antialiased sm:justify-between">
        <header className="flex flex-col items-center justify-between gap-4 bg-lego-yellow px-10 py-6 sm:flex-row sm:gap-0">
          <Link
            href="/"
            className="w-fit cursor-pointer rounded border-4 border-white p-4 text-4xl font-bold text-lego-red outline outline-black"
          >
            LEGOshelf
          </Link>
          <Button>Your shelf</Button>
        </header>
        {children}
        <footer className="flex flex-col items-center justify-end gap-2 border-t-2 border-lego-red py-6 sm:flex-row">
          <a
            href="https://agnieszka-wilczek.netlify.app"
            target="_blank"
            className="mr-2 rounded-md bg-lego-red p-2 text-white"
          >
            &#169; Veelcheck 2024
          </a>
          I made this and it's my precious.
        </footer>
      </body>
    </html>
  );
}
