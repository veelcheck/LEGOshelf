import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import NotFoundLego from "../../../public/images/not-found.avif";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="py-10">
        Dude, I think you&apos;ve got a wrong set number. We couldn&apos;t find
        any matches.
      </h1>
      <div className="bg-black">
        <SearchBar />
      </div>
      <div>
        <Image
          className="clip-path mx-auto"
          src={NotFoundLego}
          alt="One lego piece"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default NotFound;
