"use server";
import { TLegoSet } from "@/lib/types";

export const fetchLegoSet = async (
  setNum: string,
): Promise<TLegoSet | null> => {
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
    return null;
  }
  
  const data: TLegoSet = await response.json();
  return data;
};
