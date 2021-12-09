import classes from "./Modal.module.css";
import ModalHeader from "./partial/ModalHeader";
import ModalBody from "./partial/ModalBody";
import ModalFooter from "./partial/ModalFooter";

const Modal = (userData: any) => {
  const { name, closeModal, location, picture, nat, phone, email } = userData;

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <ModalHeader name={name} closeModal={closeModal} />
        <ModalBody
          location={location}
          picture={picture}
          name={name}
          nat={nat}
        />
        <ModalFooter phone={phone} email={email} />
      </div>
    </div>
  );
};

export default Modal;
