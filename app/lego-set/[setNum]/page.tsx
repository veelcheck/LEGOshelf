import Image from "next/image";
import { TLegoSet } from "@/lib/types";

export default async function LegoCard() {
  try {
    const response = await fetch(
      "https://rebrickable.com/api/v3/lego/sets/31149-1/",
      {
        headers: {
          Accept: "application/json",
          Authorization: `key ${process.env.REBRICKABLE_API_KEY}`,
        },
        // Revalidate cache for fresh data (or you can specify the cache duration)
        cache: "no-store", // Ensures data is fetched on each request (not cached)
      },
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data: TLegoSet = await response.json();

    return (
      <div className="flex flex-col items-center gap-y-4 py-16 md:flex-row md:justify-center">
        <Image
          src={data.set_img_url}
          alt={`Set ${data.name}`}
          className="h-auto md:w-[500px]"
          width="389"
          height="292"
          priority={true}
        />
        <table className="mx-auto md:mx-0">
          <tbody>
            <tr className="flex md:text-xl">
              <td className="w-28 pr-2 text-right font-semibold sm:w-36">
                Set number:
              </td>
              <td className="w-36 pl-2 text-left sm:w-36">{data.set_num}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-28 pr-2 text-right font-semibold md:w-36">
                Name:
              </td>
              <td className="w-36 pl-2 text-left sm:w-36">{data.name}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-28 pr-2 text-right font-semibold md:w-36">
                Year:{" "}
              </td>
              <td className="w-36 pl-2 text-left sm:w-36">{data.year}</td>
            </tr>
            <tr className="flex md:text-xl">
              <td className="w-28 pr-2 text-right font-semibold md:w-36">
                Parts:{" "}
              </td>
              <td className="w-36 pl-2 text-left sm:w-36">{data.num_parts}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    // Check if error is an instance of the Error object
    if (error instanceof Error) {
      return <p>Error: {error.message}</p>;
    } else {
      return <p>An unknown error occured.</p>;
    }
  }
}
