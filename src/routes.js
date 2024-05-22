/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { StudentsProvider } from "context/students-context";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";

const routes = [
  {
    path: "/tables",
    name: "Students Data",
    icon: "ni ni-bullet-list-67 text-red",
    component: (
      <StudentsProvider>
        <Tables />
      </StudentsProvider>
    ),
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;
