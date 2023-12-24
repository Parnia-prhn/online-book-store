import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// Import some icons
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function AddBookPage() {
  return (
    <div classNAme="justify-stretch">
      <div className="bg-yellow-500 rounded-lg m-5 p-5 border-4 border-black">
        <div className="flex justify-center text-center">
          <ul className="space-y-5 flex flex-col justify-end text-right">
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="book-name"
                    variant="outlined"
                    size="small"
                    className="bg-white flex "
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>نام کتاب</li>
              </ul>
            </li>
            <div>تصویر کتاب</div>
            <li className="justify-start text-left">
              <Button
                className="text-yellow-500 bg-black rounded-md"
                aria-label="uploade"
                size="small"
                variant="contained"
                //color="success"
                sx={{ color: "#fdd400" }}
                style={{
                  borderRadius: 25,
                  backgroundColor: "black",
                }}
              >
                آپلود
              </Button>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="author"
                    variant="outlined"
                    size="small"
                    className="bg-white flex "
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>نویسنده</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="genre"
                    variant="outlined"
                    size="small"
                    className="bg-white flex "
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>ژانر</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="publisher"
                    variant="outlined"
                    size="small"
                    className="bg-white flex "
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>ناشر</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="price"
                    variant="outlined"
                    size="small"
                    className="bg-white flex "
                    sx={{ m: 1, width: 180 }}
                  />
                </li>
                <li>قیمت</li>
              </ul>
            </li>
            <li className="justify-start text-left">
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
                تایید
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AddBookPage;
