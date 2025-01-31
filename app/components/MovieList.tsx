"use client";

import { isEmpty } from "lodash";
import { SafeUser } from "../types";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  data: Record<string, any>[];
  currentUser?: SafeUser | null;
};

const MovieList = ({ title, data, currentUser }: Props) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="">
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie: any) => (
            <MovieCard key={movie.id} data={movie} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
