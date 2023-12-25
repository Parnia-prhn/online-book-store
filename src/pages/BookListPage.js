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

function BookListPage() {
  return (
    <div>
      <HeaderBookPage />

      <ul className="space-y-5 justify-center mt-7 mb-5">
        <li>
          <ul className="space-x-12 flex p-5">
            <Link to="/bookpage">
              <li>
                <img src={book1} alt="book1" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
            <Link to="/bookpage">
              <li>
                <img src={book2} alt="book2" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>

            <Link to="/bookpage">
              <li>
                <img src={book3} alt="book3" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
            <Link to="/bookpage">
              <li>
                <img src={book4} alt="book4" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
          </ul>
        </li>
        <li>
          <ul className="space-x-12 flex justify-self-end p-5">
            <Link to="/bookpage">
              <li>
                <img src={book1} alt="book1" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
            <Link to="/bookpage">
              <li>
                <img src={book2} alt="book2" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
            <Link to="/bookpage">
              <li>
                <img src={book3} alt="book3" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
            <Link to="/bookpage">
              <li>
                <img src={book4} alt="book4" className="flex w-1/2 mb-3" />
                <div className="mb-3">نام کتاب</div>
                <div>قیمت کتاب</div>
              </li>
            </Link>
          </ul>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
}
export default BookListPage;
