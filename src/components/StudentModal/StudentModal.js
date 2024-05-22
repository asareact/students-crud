import { useStudents } from "context/students-context";
import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const StudentModal = ({ isEditing = false }) => {
  const {
    toggleCreatePopup,
    showCreatePopup,
    addStudent,
    studentToEdit,
    editStudent,
    setIsEditing,
  } = useStudents();
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    age: "",
    education: "",
    academicYear: "",
  });

  useEffect(() => {
    if (isEditing) {
      setStudent({
        name: studentToEdit.name,
        gender: studentToEdit.gender,
        age: studentToEdit.age,
        education: studentToEdit.education,
        academicYear: studentToEdit.academicYear,
      });
    } else {
      setStudent({
        name: "",
        gender: "",
        age: "",
        education: "",
        academicYear: "",
      });
    }
  }, [isEditing, studentToEdit]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const canSubmit = Object.values(student).every((field) => field !== "");

  return (
    <div>
      <Modal isOpen={showCreatePopup} toggle={toggleCreatePopup}>
        <ModalHeader
          toggle={toggleCreatePopup}
          style={{ backgroundColor: "#5e72e4", color: "white" }}
        >
          {isEditing ? <h2>Edit Student</h2> : <h2>Add Student</h2>}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Student's Name"
                required
                onChange={handleChange}
                value={student.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                required
                onChange={handleChange}
                value={student.gender}
              >
                <option value="">Select...</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="number"
                name="age"
                id="age"
                placeholder="Student's Age"
                required
                onChange={handleChange}
                value={student.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="education">Education</Label>
              <Input
                type="text"
                name="education"
                id="education"
                placeholder="Student's Education"
                required
                onChange={handleChange}
                value={student.education}
              />
            </FormGroup>
            <FormGroup>
              <Label for="academicYear">Academic Year</Label>
              <Input
                type="text"
                name="academicYear"
                id="academicYear"
                placeholder="Student's Academic Year"
                required
                onChange={handleChange}
                value={student.academicYear}
              />
            </FormGroup>
            <Button
              color="primary"
              disabled={!canSubmit}
              onClick={() =>
                isEditing ? editStudent(student) : addStudent(student)
              }
            >
              {isEditing ? "Edit" : "Add"}
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                toggleCreatePopup();
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default StudentModal;
