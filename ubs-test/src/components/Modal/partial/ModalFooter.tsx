import classes from "../Modal.module.css";

interface FooterData {
  phone: string;
  email: string;
}

const ModalFooter = ({ phone, email }: FooterData) => {
  return (
    <div className={classes.modalFooter}>
      <div className={classes.phone}>
        <span>Contact Number: </span>
        <span>{phone}</span>
      </div>
      <div className={classes.email}>
        <span>Email: </span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default ModalFooter;
