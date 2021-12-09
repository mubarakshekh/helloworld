import classes from "../Modal.module.css";

interface BodyData {
  location: {
    street: {
      name?: string;
      number?: string;
    };
    city?: string;
    state?: string;
    timezone: {
      description?: string;
    };
  };
  picture: {
    large?: string;
  };
  name: {
    first: string;
  };
  nat: string;
}

const ModalBody = ({ location, picture, name, nat }: BodyData) => {
  return (
    <div className={classes.modalBody}>
      <div className={classes.left}>
        <address>
          <h3>Communication Address:</h3>
          <div className={classes.houseNumber}>
            <span>House Number: </span>
            <span>{location.street.number}</span>
          </div>
          <div className={classes.streetName}>
            <span>Street Name: </span>
            <span>{location.street.name}</span>
          </div>
          <div className={classes.city}>
            <span>City: </span>
            <span>{location.city}</span>
          </div>
          <div className={classes.state}>
            <span>State: </span>
            <span>{location.state}</span>
          </div>
        </address>
        <div className={classes.timeZone}>
          <span>Time Zone: </span>
          <span>{location.timezone.description}</span>
        </div>
      </div>
      <div className={classes.right}>
        <img src={picture.large} alt={name.first}></img>
        <div className={classes.nationality}>
          <span>Nationality: </span>
          <span>{nat}</span>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
