"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useFavorites from "../hooks/useFavorites";
import { SafeUser } from "../types";

type Props = {
  movieId: string;
  currentUser?: SafeUser | null;
};

const FavoriteButton = ({ movieId, currentUser }: Props) => {
  const { mutate: mutateFavorites } = useFavorites();
  const router = useRouter();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    mutateFavorites();

    router.refresh();
  }, [movieId, isFavorite, currentUser, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white" size={25} />
    </div>
  );
};

export default FavoriteButton;
