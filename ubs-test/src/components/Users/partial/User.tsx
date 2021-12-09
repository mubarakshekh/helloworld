import classes from "./User.module.css";
import { getDateFormat } from "../../../helper/utils";

interface UserData {
  user: {
    name: {
      first: string;
      last: string;
    };
    dob: {
      date: string;
    };
    picture: {
      large: string;
    };
  };
  setUserDetails: any;
}

function User({ user, setUserDetails }: UserData) {
  const { name, dob, picture } = user;

  return (
    <div className={classes.cardWrapper} onClick={() => setUserDetails(user)}>
      <div className={classes.textWrapper}>
        <div className={classes.fullName}>
          <span>{name.first} </span>
          <span>{name.last}</span>
        </div>
        <div className={classes.dob}>
          <span>DOB: </span>
          <span>{getDateFormat(dob.date)}</span>
        </div>
      </div>
      <img src={picture.large} alt={name.first}></img>
    </div>
  );
}

export default User;
