import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signInSchema, TSignInSchema } from "@/lib/types";

const db = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body: TSignInSchema = await request.json();

    // Validate the incoming data using zod schema
    const validateData = signInSchema.parse(body);

    // Find the user in the database by email
    const existingUser = await db.user.findUnique({
      where: { email: validateData.email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      validateData.password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    return NextResponse.json({
      message: "Loging successful",
      id: existingUser.id,
      user: existingUser,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: (error as Error).message });
  }
}
