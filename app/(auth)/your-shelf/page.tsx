"use client";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  signUpSchema,
  TSignUpSchema,
  signInSchema,
  TSignInSchema,
} from "@/lib/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function YourShelf() {
  const router = useRouter();
  const [signInUserError, setSignInUserError] = useState<string | null>(null);

  const {
    register: registerSignUp,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors, isSubmitting: isSignUpSubmitting },
    reset: resetSignUp,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    register: registerSignIn,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors, isSubmitting: isSignInSubmitting },
    reset: resetSignIn,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmitSignUp = async (data: TSignUpSchema) => {
    try {
      const response = await fetch("api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      const newUser = await response.json();
      router.push(`/your-shelf/${newUser.id}`);
      resetSignUp();
    } catch (error) {
      console.error("Form submission: ", error);
    }
  };

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
        setSignInUserError("No such user");
        throw new Error("Failed to get user");
      }

      const newUser = await response.json();
      router.push(`/your-shelf/${newUser.id}`);
      resetSignIn();
    } catch (error) {
      console.error("Form submission: ", error);
    }
  };

  return (
    <div className="min-h-screen pb-8 md:flex md:flex-col md:justify-center md:border">
      <h1 className="pb-6 pt-8 text-center text-xl md:text-3xl">
        Log to/create your shelf
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch">
        <form
          onSubmit={handleSignInSubmit(onSubmitSignIn)}
          className="mb-4 flex flex-col border-b-2 border-b-lego-red pb-8 md:mb-0 md:border-b-0 md:border-r md:border-lego-red md:pb-0 md:pr-4"
        >
          <label className="pl-2">email</label>
          <input
            {...registerSignIn("email")}
            className="rounded border px-4 py-2"
            type="email"
          ></input>
          {signInErrors.email && (
            <p className="text-lego-red">{signInErrors.email.message}</p>
          )}
          <label className="pl-2">password</label>
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
            className="mt-auto bg-lego-red"
            type="submit"
            disabled={isSignInSubmitting}
          >
            {isSignInSubmitting ? "Logging in..." : "Log to your shelf"}
          </Button>
        </form>

        <form
          onSubmit={handleSignUpSubmit(onSubmitSignUp)}
          className="flex flex-col md:border-l md:border-lego-red md:pl-4"
        >
          <label className="pl-2">name</label>
          <input
            {...registerSignUp("name")}
            className="rounded border px-4 py-2"
            type="text"
          ></input>
          {signUpErrors.name && (
            <p className="text-lego-red">{`${signUpErrors.name.message}`}</p>
          )}
          <label className="pl-2">email</label>
          <input
            {...registerSignUp("email")}
            className="rounded border px-4 py-2"
            type="email"
          ></input>
          {signUpErrors.email && (
            <p className="text-lego-red">{`${signUpErrors.email.message}`}</p>
          )}
          <label className="pl-2">password</label>
          <input
            {...registerSignUp("password")}
            className="rounded border px-4 py-2"
            type="password"
          ></input>
          {signUpErrors.password && (
            <p className="text-lego-red">{`${signUpErrors.password.message}`}</p>
          )}
          <label className="pl-2">confirm password</label>
          <input
            {...registerSignUp("confirmPassword")}
            className="rounded border px-4 py-2"
            type="password"
          ></input>
          {signUpErrors.confirmPassword && (
            <p className="text-lego-red">{`${signUpErrors.confirmPassword.message}`}</p>
          )}
          <Button
            disabled={isSignUpSubmitting}
            className="mt-2 py-2 dark:bg-blue-600"
            type="submit"
          >
            {isSignUpSubmitting ? "Submitting..." : "Create your shelf"}
          </Button>
        </form>
      </div>
    </div>
  );
}
