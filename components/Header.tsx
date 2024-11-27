"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import logo from "../public/images/logo.png";
import { useAuth } from "../context/authContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { userId, logOut } = useAuth();
  const pathname = usePathname();
  const isDashboard = pathname.match(`/your-shelf/${userId}`);

  return (
    <header className="flex flex-col items-center justify-between gap-4 bg-lego-yellow px-10 py-6 sm:flex-row sm:gap-0">
      <Link
        href="/"
        className="h-fit w-fit cursor-pointer rounded-md bg-lego-red"
      >
        <Image
          src={logo}
          alt="legoshelf logo"
          priority={true}
          height={93}
          width={200}
        ></Image>
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
