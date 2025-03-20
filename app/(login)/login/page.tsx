"use client";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TSignInSchema, signInSchema } from "@/lib/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [signInUserError, setSignInUserError] = useState<string | null>(null);

  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors, isSubmitting: isSignInSubmitting },
    reset: resetSignIn,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmitSignIn = async (data: TSignInSchema) => {
    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setSignInUserError("No user or wrong data");
        throw new Error("Failed to get user");
      }

      const newUser = await response.json();
      // logIn(newUser.id);
      router.push(`/your-shelf/${newUser.id}`);
      resetSignIn();
    } catch (error) {
      console.error("Form submission: ", error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-144px)] flex-col pb-8 md:justify-center">
      <h1 className="pb-6 pt-8 text-center text-xl md:text-3xl">
        Log Your shelf
      </h1>
      <div className="flex flex-col items-center justify-center p-1">
        <form
          onSubmit={handleSignInSubmit(onSubmitSignIn)}
          className="flex w-3/4 flex-col gap-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <label className="">email</label>
          <input
            {...registerSignIn("email")}
            className="rounded border px-4 py-2"
            type="email"
          ></input>
          {signInErrors.email && (
            <p className="text-lego-red">{signInErrors.email.message}</p>
          )}
          <label className="">password</label>
          <input
            {...registerSignIn("password")}
            className="mb-2 rounded border px-4 py-2"
            type="password"
          ></input>
          {signInErrors.password && (
            <p className="text-lego-red">{signInErrors.password.message}</p>
          )}
          {signInUserError && (
            <p className="text-lego-red">{signInUserError}</p>
          )}
          <Button
            className="mt-4 bg-lego-red"
            type="submit"
            disabled={isSignInSubmitting}
          >
            {isSignInSubmitting ? "Logging in..." : "Log your shelf"}
          </Button>
          <Link href={"/signup"} className="text-blue-500 underline">
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
