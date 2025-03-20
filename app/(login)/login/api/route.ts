import { supabase } from "@/util/supabaseClient";
import { NextResponse } from "next/server";

type SignInRequestBody = {
  email: string;
  password: string;
};
export async function POST(request: Request) {
  try {
    const { email, password }: SignInRequestBody = await request.json();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }
    return NextResponse.json({ user: data.user });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
