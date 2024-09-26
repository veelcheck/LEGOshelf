import Button from "./Button";
import { searchSchema, TsearchSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function Search() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TsearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  // Event handler to restrict input to numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
  };

  const onSubmit = async (data: TsearchSchema) => {
    // ...
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-72 flex-col items-center justify-center gap-2 px-2 sm:flex-row md:h-[600px] md:py-2"
    >
      <label htmlFor="lego-search" className="sr-only">
        Search by set number:
      </label>

      <input
        {...register("searchNum")}
        type="search"
        id="lego-search"
        name="name"
        required
        placeholder="Search by set number"
        className="h-14 w-72 rounded-md p-4"
        pattern="[0-9]"
        title="Please enter numbers only"
        onInput={handleInput}
      />
      {errors.searchNum && (
        <p className="text-lego-red">{`${errors.searchNum.message}`}</p>
      )}
      <Link href={"lego-set/1"}>
        <Button
          type="submit"
          className="h-14 border border-lego-yellow bg-lego-red text-2xl"
        >
          Search
        </Button>
      </Link>
    </form>
  );
}
