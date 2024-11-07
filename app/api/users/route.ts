import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signUpSchema, TSignUpSchema } from "@/lib/types";

const db = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body: TSignUpSchema = await request.json();

    // Validate the incoming data using zod schema
    const validateData = signUpSchema.parse(body);

    //Hash the password for security
    const hashedPassword = await bcrypt.hash(validateData.password, 10);

    //Create the user in the database
    const newUser = await db.user.create({
      data: {
        email: validateData.email,
        password: hashedPassword,
        name: validateData.name,
      },
    });
    console.log("New user created:", newUser); // Debug log
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error); // Debug log
    return NextResponse.json({ error: (error as Error).message });
  }
}
