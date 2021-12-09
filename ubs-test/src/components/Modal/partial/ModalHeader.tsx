import classes from "../Modal.module.css";

interface HeaderData {
  name: { first: string; last: string; title: string };
  closeModal: any;
}

const ModalHeader = ({ name, closeModal }: HeaderData) => {
  const { first, last, title } = name;

  return (
    <div className={classes.modalHeader}>
      <h3>
        {title} {first} {last}
      </h3>
      <span className={classes.close} onClick={closeModal}>
        &times;
      </span>
    </div>
  );
};

export default ModalHeader;
