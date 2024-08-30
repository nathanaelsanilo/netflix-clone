import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar";
import serverAuth from "./lib/server-auth";
import MovieListClient from "./MovieListClient";

const Home = async () => {
  const { currentUser } = await serverAuth();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieListClient currentUser={currentUser} />
      </div>
    </>
  );
};

export default Home;
