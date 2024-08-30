import serverAuth from "../lib/server-auth";
import ProfileClient from "./ProfileClient";

type Props = {};

const Profiles = async (props: Props) => {
  const { currentUser } = await serverAuth();

  return <ProfileClient currentUser={currentUser} />;
};

export default Profiles;
