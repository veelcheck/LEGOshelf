import type { Metadata } from "next";
import "./globals.css";
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
      <body className="mx-auto flex min-h-screen flex-col font-mono antialiased">
        <Header />
        <main className="bg-zinc-50 text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
