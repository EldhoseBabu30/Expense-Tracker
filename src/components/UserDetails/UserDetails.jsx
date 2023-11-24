import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../Redux/User/UserSlice";

const UserDetails = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
   
    dispatch(clearUser());
   
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default UserDetails;
