"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import logo from "../public/images/logo.png";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { userId, logOut } = useAuth();
  const pathname = usePathname();
  const isDashboard = pathname.match(`/your-shelf/${userId}`);

  return (
    <header className="flex flex-col items-center justify-between gap-4 bg-lego-yellow px-10 py-6 sm:flex-row sm:gap-0">
      <Link
        href="/"
        className="w-fit cursor-pointer rounded border-4 border-black px-4 py-2"
      >
        <Image src={logo} alt="lego-shelf logo" priority={true}></Image>
      </Link>
      {isDashboard ? (
        <Link href="/">
          <Button
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </Button>
        </Link>
      ) : (
        <Link href="/your-shelf">
          <Button>Log shelf</Button>
        </Link>
      )}
    </header>
  );
}
