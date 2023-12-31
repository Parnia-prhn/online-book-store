import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import HeaderBookPage from "./parts/HeaderBookPage.js";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";

// Import some icons
import CommentIcon from "@mui/icons-material/Comment";
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

function BookPage() {
  return (
    <div>
      <HeaderBookPage />

      <ul className="space-x-8 flex justify-end mt-7 mb-7">
        <li className="p-10 font-yekan text-lg">
          <div className="mb-7 font-yekan text-lg">
            <b>کتابخانه نیمه شب</b>
          </div>
          داستانی راجب حسرت ها
        </li>
        <li>
          <img src={book3} alt="book4" className="flex w-1/2 p-6" />
        </li>
      </ul>
      <ul className="flex justify-start p-10">
        <li>
          <Button
            className="text-yellow-500 bg-black rounded-md"
            aria-label="sign-up"
            size="small"
            variant="contained"
            //color="success"
            sx={{
              color: "#fdd400",
              fontSize: "1rem",
              padding: "9px 25px",
              margin: "5px",
            }}
            style={{
              borderRadius: 25,
              backgroundColor: "black",
            }}
          >
            افزودن به سبد خرید
          </Button>
        </li>
        <li>
          <IconButton
            className=" "
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="favorite-list"
          >
            <FavoriteIcon className="" />
          </IconButton>
        </li>
        <li>
          <IconButton
            className=""
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="comment"
          >
            <CommentIcon className="" />
          </IconButton>
        </li>
      </ul>

      <ul className="flex justify-center p-6 space-x-4 mt-7">
        <li>
          <TextField
            label="نظر خود را بنویسید"
            variant="outlined"
            size="small"
            sx={{ m: 1, width: 700, backgroundColor: "white" }}
          />
        </li>
        <li>
          <IconButton
            edge="start"
            className=""
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="profile"
          >
            <AccountCircleIcon className="" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
}
export default BookPage;
