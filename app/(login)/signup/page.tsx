"use client";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, TSignUpSchema } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const [emailExists, setEmailExists] = useState<string | null>(null);

  const onSubmit = async (data: TSignUpSchema) => {
    try {
      // Send the data to your API route
      const response = await fetch("/signup/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        setEmailExists(null);
        router.push("your-shelf");
      } else {
        console.error("Error creating user:", result.error);
        if (
          result.error ===
          'duplicate key value violates unique constraint "users_email_key"'
        ) {
          setEmailExists("A user already exists with this email");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-144px)] flex-col pb-8 md:justify-center">
      <h1 className="pb-6 pt-8 text-center text-xl md:text-3xl">
        Create Your shelf
      </h1>
      <div className="flex flex-col items-center justify-center p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-3/4 flex-col gap-2 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <label htmlFor="name">name</label>
          <input
            {...register("name")}
            className="rounded border px-4 py-2"
            type="text"
            id="name"
          ></input>
          {errors.name && (
            <p className="text-lego-red">{`${errors.name.message}`}</p>
          )}

          <label htmlFor="email">email</label>
          <input
            {...register("email")}
            className="rounded border px-4 py-2"
            type="email"
            id="email"
          ></input>
          {errors.email && (
            <p className="text-lego-red">{`${errors.email.message}`}</p>
          )}
          {emailExists && <p className="text-lego-red">{emailExists}</p>}
          <label htmlFor="password">password</label>
          <input
            {...register("password")}
            className="rounded border px-4 py-2"
            type="password"
            id="password"
          ></input>
          {errors.password && (
            <p className="text-lego-red">{`${errors.password.message}`}</p>
          )}
          <label htmlFor="confirm-password">confirm password</label>
          <input
            {...register("confirmPassword")}
            className="rounded border px-4 py-2"
            type="password"
            id="confirm-password"
          ></input>
          {errors.confirmPassword && (
            <p className="text-lego-red">{`${errors.confirmPassword.message}`}</p>
          )}
          <Button
            disabled={isSubmitting}
            className="mt-2 py-2 dark:bg-blue-600"
            type="submit"
          >
            {isSubmitting ? (
              <div className="animate-loading">Submitting...</div>
            ) : (
              "Create your shelf"
            )}
          </Button>
          <Link href={"/login"} className="text-blue-500 underline">
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
