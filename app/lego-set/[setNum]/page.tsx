"use client";
import Image from "next/image";
import { TLegoSet } from "@/lib/types";
import { fetchLegoSet } from "@/lib/actions";
import { useEffect, useState } from "react";
import Search from "@/components/Search";

export default function LegoCard({ params }: { params: { setNum: string } }) {
  const { setNum } = params;
  const [data, setData] = useState<TLegoSet | null>(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const getLegoSet = async () => {
      try {
        const fetchedData = await fetchLegoSet(setNum);
        setData(fetchedData); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching LEGO set:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    getLegoSet(); // Call the fetch function
  }, [setNum]); // Dependency array to re-fetch if setNum changes

  if (loading) {
    return <div className="min-h-screen pt-10">Loading...</div>; // Show loading state while fetching data
  }

  if (!data) {
    return (
      <div className="min-h-screen pt-10">
        Dude, I think you&apos;ve got a wrong set number. We couldn&apos;t find
        any matches.
      </div>
    ); // Handle case when data is null
  }
  return (
    <>
      <div className="bg-black py-4 md:py-0">
        <Search />
      </div>
      <div className="flex flex-col items-center gap-y-8 py-16 md:flex-row md:justify-center">
        <Image
          src={data.set_img_url}
          alt={`Set ${data.name}`}
          className="h-auto md:w-[500px]"
          width={389}
          height={292}
          priority={true}
        />
        <table className="mx-auto md:mx-0">
          <tbody>
            <tr className="flex md:text-xl">
              <td className="w-32 pr-2 text-right font-semibold">No:</td>
              <td className="w-36 pl-2 text-left md:w-96">{data.set_num}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-32 pr-2 text-right font-semibold">Name:</td>
              <td className="w-36 pl-2 text-left md:w-96">{data.name}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-32 pr-2 text-right font-semibold">Year:</td>
              <td className="w-36 pl-2 text-left md:w-96">{data.year}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-32 pr-2 text-right font-semibold">Parts:</td>
              <td className="w-36 pl-2 text-left md:w-96">{data.num_parts}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
