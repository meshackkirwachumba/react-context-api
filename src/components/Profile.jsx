import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h5>Not logged in</h5>;
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>Your Profile</h1>
      <h3>{JSON.stringify(user)}</h3>
    </div>
  );
}

export default Profile;
