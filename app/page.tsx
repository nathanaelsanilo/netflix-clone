import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import serverAuth from "./lib/server-auth";

const Home = async () => {
  await serverAuth();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" />
      </div>
    </>
  );
};

export default Home;
