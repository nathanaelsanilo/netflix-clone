import MovieClient from "./MovieClient";

type Props = {
  params: {
    movieId: string;
  };
};

const Watch = ({ params }: Props) => {
  const { movieId } = params;
  return <MovieClient movieId={movieId} />;
};

export default Watch;
