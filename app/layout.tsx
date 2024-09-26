import type { Metadata } from "next";
import "./globals.css";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

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
      <body className="container mx-auto flex min-h-screen flex-col justify-between font-mono antialiased">
        <header className="flex flex-col items-center justify-between gap-4 bg-lego-yellow px-10 py-6 sm:flex-row sm:gap-0">
          <Link
            href="/"
            className="w-fit cursor-pointer rounded border-4 border-black px-4 py-2"
          >
            <Image
              src="/images/logo.png"
              alt="lego-shelf logo"
              height={24}
              width={150}
              priority={true}
            ></Image>
          </Link>
          <Link href="/your-shelf">
            <Button>Log shelf</Button>
          </Link>
        </header>
        <main className="space-y-2 pt-8 text-center sm:space-y-10">
          {children}
        </main>
        <footer>
          <small className="mt-auto flex flex-col items-center justify-end gap-2 border-t-2 border-lego-red py-2 sm:flex-row">
            <a
              href="https://agnieszka-wilczek.netlify.app"
              target="_blank"
              className="md:mr-2 md:rounded-md md:bg-lego-red md:p-2 md:text-white"
            >
              &#169; Veelcheck 2024
            </a>
            <p>I made this and it&apos;s my precious.</p>
          </small>
        </footer>
      </body>
    </html>
  );
}
