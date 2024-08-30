"use client";

import MovieList from "./components/MovieList";
import useFavorites from "./hooks/useFavorites";
import useMovieList from "./hooks/useMovieList";
import { SafeUser } from "./types";

type Props = {
  currentUser?: SafeUser | null;
};

const MovieListClient = ({ currentUser }: Props) => {
  const { data: movieList } = useMovieList();
  const { data: favoriteList } = useFavorites();

  return (
    <>
      <MovieList
        title="Trending Now"
        data={movieList}
        currentUser={currentUser}
      />
      <MovieList
        title="My List"
        data={favoriteList}
        currentUser={currentUser}
      />
    </>
  );
};

export default MovieListClient;
