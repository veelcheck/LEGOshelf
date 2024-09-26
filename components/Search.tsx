import Link from "next/link";
import Button from "./Button";

export default function Search() {
  // Event handler to restrict input to numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
  };
  console.log("can you see me?");
  return (
    <form className="flex h-72 flex-col items-center justify-center gap-2 px-2 sm:flex-row md:h-[600px] md:py-2 md:text-3xl">
      <label
        htmlFor="lego-search"
        className="rounded-md bg-lego-yellow bg-opacity-80 p-4 font-semibold text-black"
      >
        Search by set number:
      </label>

      <input
        type="search"
        id="lego-search"
        name="name"
        required
        className="rounded-md p-4"
        pattern="[0-9]"
        title="Please enter numbers only"
        onInput={handleInput}
      />

      <Link href="/lego-set">
        <Button className="str self-auto bg-lego-red text-base md:text-3xl">
          Search
        </Button>
      </Link>
    </form>
  );
}
