import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { notFound } from "next/navigation";

type LegoCardProps = {
  params: Promise<{ setNum: string }>;
};

export default async function LegorCard({ params }: LegoCardProps) {
  const { setNum } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const apiUrl = `${baseUrl}/lego-set/${setNum}/api`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    notFound();
    return null;
  }

  const LegoSet = await response.json();

  return (
    <>
      <div className="bg-black py-4 md:py-0">
        <SearchBar />
      </div>
      <div className="min-h-screen">
        <div className="flex flex-col items-center gap-y-8 py-16">
          <div className="w-max-[700px] md:px-4">
            <Image
              src={LegoSet.set_img_url}
              alt={`Set ${LegoSet.name}`}
              className="h-auto md:w-auto"
              width={389}
              height={292}
              priority={true}
            />
          </div>
          <table className="mx-auto md:mx-0">
            <tbody>
              <tr className="flex md:text-xl">
                <td className="w-20 pr-2 text-right font-semibold">No:</td>
                <td className="md:w-max-96 pl-2 text-left">
                  {LegoSet.set_num}
                </td>
              </tr>
              <tr className="flex md:text-xl">
                <td className="w-20 pr-2 text-right font-semibold">Name:</td>
                <td className="md:w-max-96 pl-2 text-left">{LegoSet.name}</td>
              </tr>
              <tr className="flex md:text-xl">
                <td className="w-20 pr-2 text-right font-semibold">Year:</td>
                <td className="md:w-max-96 pl-2 text-left">{LegoSet.year}</td>
              </tr>
              <tr className="flex md:text-xl">
                <td className="w-20 pr-2 text-right font-semibold">Parts:</td>
                <td className="md:w-max-96 pl-2 text-left">
                  {LegoSet.num_parts}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
