import { useEffect, useState } from "react";
import User from "./partial/User";
import classes from "./Users.module.css";
import Loader from "../Loader/Loader";
import { fetchData } from "../../apis/api";

function Users({ setUserDetails }: any) {
  const [users, setUsers] = useState<any>([]);
  const [isLoaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData("?results=50");
      setUsers(response.results);
      setLoaded(true);
    };
    getData();
  }, []);

  return (
    <div className={classes.usersContainer}>
      {users.map((user: any, index: number) => (
        <User key={index} setUserDetails={setUserDetails} user={user} />
      ))}
      {!isLoaded && <Loader />}
    </div>
  );
}

export default Users;
