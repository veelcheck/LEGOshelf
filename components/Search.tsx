import Button from "./Button";

export default function Search() {
  // Event handler to restrict input to numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
  };
  return (
    <form className="flex h-64 flex-col items-center justify-center gap-2 px-2 sm:flex-row md:h-[600px] md:text-3xl">
      <label
        htmlFor="lego-search"
        className="rounded-md bg-lego-red bg-opacity-80 p-4 font-semibold text-white"
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

      <Button className="bg-lego-yellow">Search</Button>
    </form>
  );
}
