import { useStudents } from "context/students-context";
import { useState } from "react";
import {
  PencilFill,
  TrashFill,
  ArrowDown,
  ArrowUp,
} from "react-bootstrap-icons";
import { Button, Input, Table } from "reactstrap";

function StudentsTable({ handleStudentId }) {
  const { toggleDeletePopup, students, handleStudentToEdit } = useStudents();
  const [filterName, setFilterName] = useState("");
  const [filtroGender, setFiltroGender] = useState("");
  const [orderName, setOrderName] = useState(false);
  const [orderEducation, setOrderEducation] = useState(false);

  const filteredAndSortedData = students
    .filter(
      (student) =>
        student.name
          .toString()
          .toLowerCase()
          .includes(filterName.toLowerCase()) &&
        student.gender
          .toString()
          .toLowerCase()
          .includes(filtroGender.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;

      if (orderName !== null) {
        comparison = orderName
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (comparison === 0 && orderEducation !== null) {
        comparison = orderEducation
          ? a.education.localeCompare(b.education)
          : b.education.localeCompare(a.education);
      }
      return comparison;
    });

  const handleDeleteClick = (studentId) => {
    toggleDeletePopup();
    handleStudentId(studentId);
  };
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead
        className="thead-light position-sticky top-0"
        style={{ zIndex: 1 }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3 ml-3 w-fill">
          <h1>Filters</h1>
          <Input
            type="text"
            placeholder="Search Name..."
            onChange={(e) => setFilterName(e.target.value)}
            className="mr-3 ml-3"
          />

          <Input
            type="text"
            placeholder="Search Gender..."
            onChange={(e) => setFiltroGender(e.target.value)}
            className="mr-3 "
          />
        </div>
        <tr>
          <th scope="col" hidden>
            Id
          </th>
          <th scope="col">
            <div className="d-flex justify-content-start align-items-center">
              <h2>Name</h2>
              <Button
                size="sm"
                color="primary"
                className="ml-3 mb-2"
                onClick={() => {
                  setOrderName(!orderName);
                  setOrderEducation(null);
                }}
              >
                {orderName ? <ArrowUp /> : <ArrowDown />}
              </Button>
            </div>
          </th>
          <th scope="col">
            <h2>Gender</h2>
          </th>
          <th scope="col">
            <h2>Age</h2>
          </th>
          <th scope="col">
            <div className="d-flex justify-content-center align-items-center">
              <h2>Education</h2>
              <Button
                size="sm"
                color="primary"
                className="ml-3 mb-2"
                onClick={() => {
                  setOrderEducation(!orderEducation);
                  setOrderName(null);
                }}
              >
                {orderEducation ? <ArrowUp /> : <ArrowDown />}
              </Button>
            </div>
          </th>
          <th scope="col">
            <h2>Academic Year</h2>
          </th>
          <th scope="col">
            <h2>Actions</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredAndSortedData.length > 0 ? (
          filteredAndSortedData.map((student) => (
            <tr key={student.id}>
              <th scope="row" hidden>
                {student.id}
              </th>
              <td>
                <p className="font-weight-bold">{student.name}</p>
              </td>
              <td>
                <p className="font-weight-bold">{student.gender}</p>
              </td>
              <td>
                <p className="font-weight-bold">{student.age}</p>
              </td>
              <td>
                <p className="font-weight-bold">{student.education}</p>
              </td>
              <td>
                <p className="font-weight-bold">{student.academicYear}</p>
              </td>

              <td className="text-left">
                <div>
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleStudentToEdit(student.id)}
                  >
                    <PencilFill />
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => handleDeleteClick(student.id)}
                  >
                    <TrashFill />
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <div
                className="d-flex justify-content-center "
                style={{
                  position: "relative",
                  top: "50%",
                  left: "80%",
                }}
              >
                <h3>No Students Found</h3>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default StudentsTable;
