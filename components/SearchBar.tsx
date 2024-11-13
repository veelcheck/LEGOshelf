"use client";
import Button from "@/components/Button";
import { searchSchema, TSearchSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchContext } from "@/context/SearchContex";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const { setSearchNum } = useSearchContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  // Event handler to restrict input to numbers
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only allow numbers
  };

  const onSubmit = (data: TSearchSchema) => {
    setSearchNum(data.searchNum);
    router.push(`/lego-set/${data.searchNum}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-fit flex-col items-center justify-center gap-2 px-2 py-10 sm:flex-row"
      >
        <label htmlFor="lego-search" className="sr-only">
          Search by set number:
        </label>
        {errors.searchNum && (
          <p
            id="inputError"
            aria-live="assertive"
            className="flex h-14 items-center justify-center rounded-md border border-lego-yellow bg-white px-4 text-lego-red"
          >{`${errors.searchNum.message}`}</p>
        )}
        <input
          {...register("searchNum")}
          type="text"
          inputMode="numeric"
          id="lego-search"
          aria-describedby="inputError"
          aria-invalid={!!errors.searchNum}
          placeholder="Search by set number"
          className="h-14 w-72 rounded-md p-4"
          title="Please enter up to 7 digits"
          onInput={handleInput}
          autoFocus
        />

        <Button
          type="submit"
          className="h-14 border border-lego-yellow bg-lego-red text-2xl"
        >
          Search
        </Button>
      </form>
    </>
  );
}
