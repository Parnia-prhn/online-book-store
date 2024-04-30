import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

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

function HeaderBookPage() {
  const handleButtonClickCart = (userId) => {
    axios
      .post(`http://localhost:3001/shoppingCart/cart/${userId}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  const handleButtonClickFavoriteBooks = (userId) => {
    axios
      .post(`http://localhost:3001/books/favoriteBooks/${userId}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  return (
    <header className="bg-yellow-500 rounded-b-lg p-5  ">
      <div className=" px-4 py-2">
        <Link to="/profilepage">
          <IconButton
            edge="start"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            className=""
            aria-label="profile"
          >
            <AccountCircleIcon className="" />
          </IconButton>
        </Link>
        <Link to="/booklistpage">
          <IconButton
            className=" "
            onClick={handleButtonClickFavoriteBooks}
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
        </Link>
        <Link to="/booklistpage">
          <IconButton
            className=""
            onClick={handleButtonClickCart}
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="shopping-cart"
          >
            <ShoppingCartIcon className="" />
          </IconButton>
        </Link>
      </div>
    </header>
  );
}
export default HeaderBookPage;
