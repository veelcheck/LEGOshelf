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
      <ol className="bg-white bg-opacity-80 px-2 md:mx-10 md:rounded-md md:px-0">
        <li>Set number: {data.set_num}</li>
        <li>Name: {data.name}</li>
        <li>Year: {data.year}</li>
        <li>Number of Parts: {data.num_parts}</li>
        <li>
          <img src={data.set_img_url} className="min-w-64 max-w-2xl" />
        </li>
      </ol>
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
