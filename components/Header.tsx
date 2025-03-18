import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import logo from "../public/images/logo.png";

export default function Header() {
  return (
    <header className="bg-lego-yellow">
      <div className="container mx-auto flex flex-col items-center justify-between px-10 sm:flex-row sm:gap-0">
        <Link href="/" className="cursor-pointer">
          <Image
            src={logo}
            alt="lego-shelf logo"
            priority={true}
            className="max-h-[160px] max-w-[200px] bg-lego-red"
          ></Image>
        </Link>
        <Link href="/your-shelf">
          <Button className="my-4">Log shelf</Button>
        </Link>
      </div>
    </header>
  );
}
