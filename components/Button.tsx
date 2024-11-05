// Merges class names coming from different places without conflict.
import { twMerge } from "tailwind-merge";
import { ButtonProps } from "@/lib/types";

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-black px-4 py-2 font-bold text-white hover:opacity-50 sm:text-2xl",
        className
      )}
    >
      {children}
    </button>
  );
}
