import Image from "next/image";
import LegoBrick from "../../../public/images/lego-brick.svg";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-start justify-center pt-10">
      <Image
        src={LegoBrick}
        alt="Loading..."
        width={100}
        height={100}
        className="animate-loading"
      />
    </div>
  );
};

export default Loading;
