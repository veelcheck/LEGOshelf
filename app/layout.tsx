import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="container mx-auto flex min-h-screen flex-col font-mono antialiased">
        <Header />
        <SearchProvider>
          <main className="bg-zinc-50 text-center">{children}</main>
        </SearchProvider>
        <Footer />
      </body>
    </html>
  );
}
