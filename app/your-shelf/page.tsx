// "use client";
// import Button from "@/components/Button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { signUpSchema, TSignUpSchema } from "@/lib/types";

export default function YourShelf() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm<TSignUpSchema>({
  //   resolver: zodResolver(signUpSchema),
  // });

  // const onSubmit = async (data: TSignUpSchema) => {
  //   try {
  //     // Simulate form submission
  //     console.log(data);
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     reset();
  //   } catch (error) {
  //     console.error("Form submission: ", error);
  //   }
  // };

  return (
    <div className="min-h-[calc(100vh-144px)]">
      <h1>Your shelf</h1>
    </div>
    // <div className="min-h-screen pb-8 md:flex md:flex-col md:justify-center md:border">
    //   <h1 className="pb-6 pt-8 text-center text-xl md:text-3xl">
    //     Log to/create your shelf
    //   </h1>
    //   <div className="flex flex-col items-center justify-center md:flex-row md:items-stretch">
    //     <form
    //       // onSubmit={handleSubmit(onSubmit)}
    //       className="mb-4 flex flex-col border-b-2 border-b-lego-red pb-8 md:mb-0 md:border-b-0 md:border-r md:border-lego-red md:pb-0 md:pr-4"
    //     >
    //       <label className="pl-2">email</label>
    //       <input
    //         // {...register("loggingEmail")}
    //         className="rounded border px-4 py-2"
    //       ></input>
    //       <label className="pl-2">password</label>
    //       <input
    //         // {...register("loggingPassword")}
    //         className="mb-2 rounded border px-4 py-2"
    //       ></input>
    //       <Button
    //         className="mt-auto bg-lego-red"
    //         type="submit"
    //         // disabled={isSubmitting}
    //       >
    //         Log to your shelf
    //       </Button>
    //     </form>

    //     <form
    //       onSubmit={handleSubmit(onSubmit)}
    //       className="flex flex-col md:border-l md:border-lego-red md:pl-4"
    //     >
    //       <label className="pl-2">name</label>
    //       <input
    //         {...register("name")}
    //         className="rounded border px-4 py-2"
    //         type="text"
    //       ></input>
    //       {errors.name && (
    //         <p className="text-lego-red">{`${errors.name.message}`}</p>
    //       )}
    //       <label className="pl-2">email</label>
    //       <input
    //         {...register("email")}
    //         className="rounded border px-4 py-2"
    //         type="email"
    //       ></input>
    //       {errors.email && (
    //         <p className="text-lego-red">{`${errors.email.message}`}</p>
    //       )}
    //       <label className="pl-2">password</label>
    //       <input
    //         {...register("password")}
    //         className="rounded border px-4 py-2"
    //         type="password"
    //       ></input>
    //       {errors.password && (
    //         <p className="text-lego-red">{`${errors.password.message}`}</p>
    //       )}
    //       <label className="pl-2">confirm password</label>
    //       <input
    //         {...register("confirmPassword")}
    //         className="rounded border px-4 py-2"
    //         type="password"
    //       ></input>
    //       {errors.confirmPassword && (
    //         <p className="text-lego-red">{`${errors.confirmPassword.message}`}</p>
    //       )}
    //       <Button
    //         disabled={isSubmitting}
    //         className="mt-2 py-2 dark:bg-blue-600"
    //         type="submit"
    //       >
    //         {isSubmitting ? "Submitting" : "Create your shelf"}
    //       </Button>
    //     </form>
    //   </div>
    // </div>
  );
}
