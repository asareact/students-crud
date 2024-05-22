import React, { createContext, useEffect, useState } from "react";
import { addStudentRequest } from "services/student.service";
import { updateStudent } from "services/student.service";
import { getStudents } from "services/student.service";
import { deleteStudentRequest } from "services/student.service";
import { getToken } from "utils";

const StudentsContext = createContext();

const StudentsProvider = ({ children }) => {
  const token = getToken();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [, setLastId] = useState();
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudents({ token });

      setLastId(data.sort((a, b) => a.id - b.id).at(-1).id + 1);

      setStudents(data.sort((a, b) => b.id - a.id).slice(0, 10));
    };

    fetchStudents();
  }, [students]);

  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  const handleStudentToEdit = (id) => {
    setIsEditing(true);
    const student = students.find((student) => student.id === id);
    setStudentToEdit(student);
    toggleCreatePopup();
  };

  const toggleCreatePopup = () => {
    setShowCreatePopup(!showCreatePopup);
  };

  const addStudent = async (student) => {
    const body = {
      name: student.name,
      gender: student.gender,
      age: +student.age,
      education: student.education,
      academicYear: +student.academicYear,
    };

    await addStudentRequest({ token, body });

    toggleCreatePopup();

    setStudents([body, ...students]);
  };

  const deleteStudent = async (id) => {
    const deleteStudentResponse = await deleteStudentRequest({ token, id });

    if (deleteStudentResponse !== 200) return;
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = async (studentForm) => {
    const body = {
      name: studentForm.name,
      gender: studentForm.gender,
      age: +studentForm.age,
      education: studentForm.education,
      academicYear: +studentForm.academicYear,
    };
    await updateStudent({ id: studentToEdit.id, token, body });
    setStudents(
      students
        .map((student) =>
          student.id === studentToEdit.id ? studentForm : student
        )
        .sort((a, b) => b.id - a.id)
    );
    toggleCreatePopup();
    setIsEditing(false);
  };

  return (
    <StudentsContext.Provider
      value={{
        setLoading,
        loading,
        students,
        addStudent,
        deleteStudent,
        editStudent,
        showDeletePopup,
        toggleDeletePopup,
        setStudents,
        toggleCreatePopup,
        showCreatePopup,
        handleStudentToEdit,
        studentToEdit,
        isEditing,
        setIsEditing,
        setStudentToEdit,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

const useStudents = () => React.useContext(StudentsContext);

export { StudentsProvider, useStudents };

export default StudentsContext;
