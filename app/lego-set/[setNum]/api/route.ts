// import { TLegoSet } from "@/lib/types";
import { NextResponse } from "next/server";

type LegoCardProps = {
  params: Promise<{ setNum: string }>;
};

export async function GET(_request: Request, { params }: LegoCardProps) {
  const { setNum } = await params;

  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${setNum}-1/`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `key ${process.env.REBRICKABLE_API_KEY}`,
      },
      cache: "no-store", // Ensures data is fetched on each request (not cached)
    },
  );

  if (!response.ok) {
    // return null;
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  const data = await response.json();
  return NextResponse.json(data);
}
