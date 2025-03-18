import SearchBar from "@/components/SearchBar";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <h1 className="py-10">
        Dude, I think you&apos;ve got a wrong set number. We couldn&apos;t find
        any matches.
      </h1>
      <div className="bg-black">
        <SearchBar />
      </div>
    </div>
  );
};

export default NotFound;
