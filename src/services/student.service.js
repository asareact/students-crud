const { APIRoutes } = require("api.routes");
const { BaseURL } = require("api.routes");

export const getStudents = async ({ token }) => {
  const response = await fetch(`${BaseURL}${APIRoutes.students}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const addStudentRequest = async ({ token, body }) => {
  const response = await fetch(`${BaseURL}${APIRoutes.addStudent}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  await response.status;
};

export const updateStudent = async ({ token, body, id }) => {
  const pathURL = APIRoutes.updateStudent.replace(":id", id);

  const response = await fetch(`${BaseURL}${pathURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  await response.status;
};

export const deleteStudentRequest = async ({ token, id }) => {
  const pathURL = APIRoutes.deleteStudent.replace(":id", id);

  const response = await fetch(`${BaseURL}${pathURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const status = await response.status;

  return status;
};
