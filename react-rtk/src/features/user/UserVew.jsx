import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export default function UserVew() {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2>List of users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length > 0 ? (
        <ul>
          {user.users.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
