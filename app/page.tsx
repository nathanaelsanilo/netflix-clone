import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar";
import serverAuth from "./lib/server-auth";
import MovieListClient from "./MovieListClient";
import InfoModal from "./components/InfoModal";

const Home = async () => {
  const { currentUser } = await serverAuth();

  return (
    <>
      <InfoModal />
      <Navbar currentUser={currentUser} />
      <Billboard />
      <div className="pb-40">
        <MovieListClient currentUser={currentUser} />
      </div>
    </>
  );
};

export default Home;
