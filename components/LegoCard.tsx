type TLegoSet = {
  set_num: string;
  name: string;
  year: string;
  num_parts: number;
  //theme_id: number;
  set_img_url: string;
};

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
      <>
        <table className="mx-auto">
          <tr className="flex">
            <td className="w-28 border-r text-right">Set number: </td>
            <td className="w-32 text-left">{data.set_num}</td>
          </tr>
          <tr className="flex">
            <td className="w-28 border-r text-right">Name: </td>
            <td className="w-32 text-right">{data.name}</td>
          </tr>
          <tr className="flex">
            <td className="w-20 text-right">Year: </td>
            <td className="w-32 text-right">{data.year}</td>
          </tr>
          <tr className="flex">
            <td className="w-28 text-right">Number of Parts: </td>
            <td className="w-32 text-right">{data.num_parts}</td>
          </tr>
        </table>
        <ol className="border px-2">
          <li className="flex justify-center border">
            <div className="w-32">Set number: </div>
            <div className="w-32">{data.set_num}</div>
          </li>
          <li>Name: {data.name}</li>
          <li>Year: {data.year}</li>
          <li>Number of Parts: {data.num_parts}</li>
          <li>
            <img
              src={data.set_img_url}
              alt={`Image of ${data.name}`}
              className="h-auto w-full max-w-2xl"
            />
          </li>
        </ol>
      </>
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
