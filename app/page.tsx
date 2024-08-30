import serverAuth from "./lib/server-auth";

const Home = async () => {
  const { currentUser } = await serverAuth();

  return (
    <>
      <p className="text-green-500">home page</p>
      <h1 className="text-white text-2xl">{currentUser.email}</h1>
    </>
  );
};

export default Home;
