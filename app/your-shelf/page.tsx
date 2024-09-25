"use client";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z
  .object({
    username: z.string(),
    email: z.string().email(),
    password: z
      .string()
      .min(10, "Password must be at least 10 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(/[\W_]/, "Password must contain at least one special character."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

export default function YourShelf() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // Submit to server...
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <main className="my-auto py-6">
      <h1 className="pb-6 text-center text-xl md:text-3xl">
        Log to/create your shelf
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 flex flex-col md:mb-0 md:border-r md:border-lego-red md:pr-4"
        >
          <label className="pl-2">email</label>
          <input
            {...register("loggingEmail")}
            className="rounded border px-4 py-2"
          ></input>
          <label className="pl-2">password</label>
          <input
            {...register("loggingPassword")}
            className="mb-2 rounded border px-4 py-2"
          ></input>
          <Button
            className="mt-auto bg-lego-red py-2 disabled:bg-gray-500"
            type="submit"
            disabled={isSubmitting}
          >
            Log to your shelf
          </Button>
        </form>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:border-l md:border-lego-red md:pl-4"
        >
          <label className="pl-2">name</label>
          <input
            {...register("name")}
            className="rounded border px-4 py-2"
            typeof="text"
          ></input>
          {errors.name && (
            <p className="text-lego-red">{`${errors.name.message}`}</p>
          )}
          <label className="pl-2">email</label>
          <input
            {...register("email")}
            className="rounded border px-4 py-2"
            typeof="email"
          ></input>
          {errors.email && (
            <p className="text-lego-red">{`${errors.email.message}`}</p>
          )}
          <label className="pl-2">password</label>
          <input
            {...register("password")}
            className="rounded border px-4 py-2"
            type="password"
          ></input>
          {errors.password && (
            <p className="text-lego-red">{`${errors.password.message}`}</p>
          )}
          <label className="pl-2">confirm password</label>
          <input
            {...register("confirmPassword")}
            className="rounded border px-4 py-2"
            type="password"
          ></input>
          {errors.confirmPassword && (
            <p className="text-lego-red">{`${errors.confirmPassword.message}`}</p>
          )}
          <Button
            disabled={isSubmitting}
            className="mt-2 py-2 disabled:bg-gray-500 dark:bg-blue-600"
            type="submit"
          >
            Create your shelf
          </Button>
        </form>
      </div>
    </main>
  );
}
