import { z } from "zod";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export type TSearchSchema = z.infer<typeof searchSchema>;

export type TSignInSchema = z.infer<typeof signInSchema>;

export type TLegoSet = {
  set_num: string;
  name: string;
  year: string;
  num_parts: number;
  set_img_url: string;
};
const emailSchema = z.string().email();
const passwordSignUpSchema = z
  .string()
  .min(10, "Password must be at least 10 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[\W_]/, "Password must contain at least one special character");

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string(),
});

export const signUpSchema = z
  .object({
    name: z.string(),
    email: emailSchema,
    password: passwordSignUpSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const searchSchema = z.object({
  searchNum: z
    .string()
    .min(4, "Try at least 4 digits")
    .max(7, "No more than 7 digits")
    .trim(),
});
