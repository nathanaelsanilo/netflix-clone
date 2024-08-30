import Navbar from "./components/Navbar";
import serverAuth from "./lib/server-auth";
import Billboard from "./components/Billboard";

const Home = async () => {
  const { currentUser } = await serverAuth();

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
};

export default Home;
