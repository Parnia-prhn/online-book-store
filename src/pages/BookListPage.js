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
  const books = [
    { id: 1, image: book1, name: "نام کتاب 1", price: "قیمت کتاب 1" },
    { id: 2, image: book2, name: "نام کتاب 2", price: "قیمت کتاب 2" },
    { id: 3, image: book3, name: "نام کتاب 3", price: "قیمت کتاب 3" },
    { id: 4, image: book4, name: "نام کتاب 4", price: "قیمت کتاب 4" },
  ];
  return (
    <div>
      <HeaderBookPage />

      <ul className="space-y-5 justify-center mt-7 mb-5">
        <li>
          <ul className="space-x-12 flex justify-end p-5">
            {books.map((book) => (
              <Link to="/bookpage" key={book.id}>
                <li>
                  <img
                    src={book.image}
                    alt={`book${book.id}`}
                    className="w-1/2 mb-3"
                  />
                  <div className="font-yekan text-base mb-3 ">{book.name}</div>
                  <div className="font-yekan text-base">{book.price}</div>
                </li>
              </Link>
            ))}
          </ul>
        </li>
        <li>
          <ul className="space-x-12 flex justify-end p-5">
            {books.map((book) => (
              <Link to="/bookpage" key={book.id}>
                <li>
                  <img
                    src={book.image}
                    alt={`book${book.id}`}
                    className="w-1/2 mb-3"
                  />
                  <div className="font-yekan text-base mb-3 ">{book.name}</div>
                  <div className="font-yekan text-base">{book.price}</div>
                </li>
              </Link>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default BookListPage;
