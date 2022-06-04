import buildClient from "../api/build-client";
import BaseLayout from "./BaseLayout";

const Landing = ({ currentUser }) => {
  console.log(currentUser)
  return (
    <BaseLayout currentUser={currentUser.currentUser}>
      {currentUser.currentUser ? (
        <h1>You are signed in</h1>
      ) : (
        <h1>You are NOT signed in</h1>
      )}
    </BaseLayout>
  );
};
 
export default Landing;
export const getServerSideProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  console.log(data)
  return { props: { currentUser: data } };
};