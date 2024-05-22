import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import { login } from "services/authentication.service";

export const useLogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setError] = useState({ emailError: "", passwordError: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let emailError = "";
    let passwordError = "";

    if (!userEmail) {
      emailError = "The email cannot be empty";
    } else if (!emailRegex.test(userEmail)) {
      emailError = "Please enter a valid email address";
    }

    if (!userPassword) {
      passwordError = "Password cannot be empty";
    }

    if (emailError || passwordError) {
      setError({ emailError, passwordError });
      return;
    }

    const token = await login({ email: userEmail, password: userPassword });

    localStorage.setItem("token", token);
    sessionStorage.setItem("user", userEmail);

    navigate(routes[0].path);
  };

  return {
    states: {
      userEmail,
      userPassword,
      errors,
    },
    actions: {
      setUserEmail,
      setUserPassword,
      handleLogin,
    },
  };
};
