import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen px-10 py-6 text-center sm:h-auto">
      <h1>404 | Page not found</h1>
      <p className="pb-6">Could not find requested resources.</p>
      <Link href="/">
        <Button className="bg-blue-600 py-2 text-base">Home Shelf</Button>
      </Link>
    </div>
  );
}
