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
      <br />
      <br />
      <br />
      <ul className="space-x-8 flex justify-end">
        <li className="p-10">
          <b>کتابخانه نیمه شب</b>
          <br />
          <br />
          داستانی راجب حسرت ها
        </li>
        <li>
          <img src={book3} alt="book4" className="flex w-1/2 p-6" />
        </li>
      </ul>
      <br />
      <br />
      <ul className="flex justify-start p-10">
        <li>
          <Button
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
            افزودن به سبد خرید
          </Button>
        </li>
        <li>
          <IconButton className="text-black " aria-label="favorite-list">
            <FavoriteIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </li>
        <li>
          <IconButton className="text-black " aria-label="comment">
            <CommentIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </li>
      </ul>
      <br />
      <br />
      <ul className="flex justify-center p-6 space-x-4">
        <li>
          <TextField
            label="نظر خود را بنویسید"
            variant="outlined"
            size="small"
            sx={{ m: 1, width: 700 }}
          />
        </li>
        <li>
          <IconButton
            edge="start"
            className="text-white bg-black rounded-full p-1"
            aria-label="profile"
          >
            <AccountCircleIcon className="text-yellow-500 bg-black w-90 h-90 rounded-full" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
}
export default BookPage;
