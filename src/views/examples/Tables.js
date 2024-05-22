import { Button, Card, CardHeader, Container, Row } from "reactstrap";
// core components
import DeletePopup from "components/DeletePopup/DeletePopup";
import Header from "components/Headers/Header.js";
import { useState } from "react";
import StudentsTable from "components/StudentsTable/StudentsTable";
import { useStudents } from "context/students-context";
import StudentModal from "components/StudentModal/StudentModal";

const Tables = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const { toggleCreatePopup, isEditing, setIsEditing, setStudentToEdit } =
    useStudents();

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Button
          className="float-right"
          color="success"
          onClick={() => {
            setIsEditing(false);
            setStudentToEdit(null);
            toggleCreatePopup();
          }}
        >
          Add Student
        </Button>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Students</h3>
              </CardHeader>
              <StudentsTable handleStudentId={setSelectedStudentId} />
            </Card>
          </div>
        </Row>
      </Container>

      <DeletePopup id={selectedStudentId} />
      <StudentModal isEditing={isEditing} />
    </>
  );
};

export default Tables;
