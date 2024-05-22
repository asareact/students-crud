import { useStudents } from "context/students-context";
import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeletePopup = ({ id }) => {
  const { showDeletePopup, toggleDeletePopup, deleteStudent } = useStudents();

  return (
    <Modal isOpen={showDeletePopup} centered>
      <ModalHeader
        style={{ backgroundColor: "#5e72e4", color: "white" }}
        toggle={toggleDeletePopup}
      >
        Confirm Deletion
      </ModalHeader>
      <ModalBody>Are you sure you want to eliminate this student?</ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            deleteStudent(id);
            toggleDeletePopup();
          }}
        >
          Accept
        </Button>{" "}
        <Button color="secondary" onClick={toggleDeletePopup}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeletePopup;
