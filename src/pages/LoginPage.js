import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
//icnos
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function LoginPage() {
  const validCredentials = {
    username: "admin",
    password: "admin",
  };

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.username === validCredentials.username &&
      credentials.password === validCredentials.password
    ) {
      setError("");
      console.log("Login successful");
      setIsLoggedIn(true); // Set the logged-in state to true
      // You can redirect the user or perform additional actions here
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="justify-stretch">
      <div className="bg-yellow-500 rounded-lg m-5 p-5 border-4 border-black">
        <div className="flex justify-center text-center">
          <CgProfile className="text-yellow-500 bg-black w-40 h-40 rounded-full m-5 mb-7" />
        </div>
        <div className="flex justify-center text-center">
          <ul className="space-y-5 flex flex-col justify-center text-center">
            <form onSubmit={handleFormSubmit}>
              <li>
                <ul className="space-x-5 flex justify-center text-center ">
                  <li>
                    <TextField
                      id="username"
                      name="username"
                      value={credentials.username}
                      onChange={handleInputChange}
                      /////
                      label="username"
                      variant="outlined"
                      size="small"
                      className="bg-white flex "
                      sx={{ m: 1, width: 180 }}
                      InputProps={{
                        style: {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </li>
                  <li>نام کاربری</li>
                </ul>
              </li>
              <li>
                <ul className="space-x-5 flex justify-center text-center ">
                  <li>
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      error={!!error}
                      helperText={error}
                      //////
                      label="password"
                      variant="outlined"
                      size="small"
                      className="bg-white flex "
                      sx={{ m: 1, width: 180 }}
                    />
                  </li>
                  <li>رمز عبور</li>
                </ul>
              </li>
              <li className="justify-center text-center">
                <Button
                  type="submit"
                  // component={Link}
                  // to="/profilepage"
                  className="text-yellow-500 bg-black rounded-md"
                  aria-label="sign-up"
                  size="small"
                  variant="contained"
                  //color="success"
                  sx={{ color: "#fdd400" }}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "black",
                  }}
                >
                  ورود
                </Button>
              </li>
            </form>
            <li>
              <div className="flex justify-center text-center">
                <IconButton
                  edge="start"
                  className="text-white bg-black rounded-full p-1"
                  aria-label="google-account"
                >
                  <FaGoogle className="text-yellow-500 bg-black w-15 h-15 rounded-full" />
                </IconButton>

                <IconButton className="text-black " aria-label="github-account">
                  <FaGithub className="text-yellow-500 bg-black w-15 h-15 rounded-full" />
                </IconButton>

                <IconButton
                  className="text-black"
                  aria-label="linkedin-account"
                >
                  <FaLinkedin className="text-yellow-500 bg-black w-15 h-15 rounded-full" />
                </IconButton>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isLoggedIn && <Link to="/profilepage">Go to profile</Link>}
    </div>
  );
}
export default LoginPage;
