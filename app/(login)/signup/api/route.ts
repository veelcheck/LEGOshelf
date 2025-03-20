import { supabase } from "@/util/supabaseClient";
import { NextResponse } from "next/server";

type SignUpRequestBody = {
  name: string;
  email: string;
  password: string;
};
export async function POST(request: Request) {
  try {
    const { name, email, password }: SignUpRequestBody = await request.json();

    // Check if the user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single(); // `.single()` returns the first row or null if no match

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with this email" },
        { status: 400 },
      );
    }

    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: error?.message || "Sign-up failed" },
        { status: 400 },
      );
    }

    // Insert the user into the 'users' table
    const { error: insertError } = await supabase
      .from("users")
      .insert([{ id: data.user.id, name, email, password }]);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "User created successfully", userId: data.user.id },
      { status: 200 },
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 },
    );
  }
}
