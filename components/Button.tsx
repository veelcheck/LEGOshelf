// Merges class names coming from different places without conflict.
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-md bg-black p-4 text-2xl font-bold text-white hover:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
