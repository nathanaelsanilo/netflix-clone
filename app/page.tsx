import Navbar from "./components/Navbar";
import serverAuth from "./lib/server-auth";

const Home = async () => {
  const { currentUser } = await serverAuth();

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
