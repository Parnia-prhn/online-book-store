import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
//icnos
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function LoginPage() {
  return (
    <div classNAme="justify-stretch">
      <div className="bg-yellow-500 rounded-lg m-5 p-5 border-4 border-black">
        <div className="flex justify-center text-center">
          <CgProfile className="text-yellow-500 bg-black w-40 h-40 rounded-full m-5" />
          <br />
        </div>
        <div className="flex justify-center text-center">
          <ul className="space-y-5 flex flex-col justify-center text-center">
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="username"
                    variant="Outlined"
                    size="small"
                    className="bg-white flex rounded-full"
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
                    label="password"
                    variant="standard"
                    size="small"
                    className="bg-white flex rounded-full"
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>رمز عبور</li>
              </ul>
            </li>
            <li className="justify-center text-center">
              <Button
              component={Link}
              to="/profilepage"
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
    </div>
  );
}
export default LoginPage;
