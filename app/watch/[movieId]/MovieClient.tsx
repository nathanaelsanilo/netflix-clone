"use client";

import useMovie from "@/app/hooks/useMovie";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
  movieId: string;
};

const MovieClient = ({ movieId }: Props) => {
  const router = useRouter();
  const { data, error, isLoading } = useMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="w-full h-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default MovieClient;
