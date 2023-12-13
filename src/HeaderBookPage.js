import React from "react";
import ReactDOM from "react-dom/client";

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
  return (
    <header className="bg-yellow-500 rounded-b-lg p-5  ">
      <div className=" px-4 py-2">
        <IconButton
          edge="start"
          className="text-white bg-black rounded-full p-1"
          aria-label="profile"
        >
          <AccountCircleIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
        </IconButton>

        <IconButton className="text-black " aria-label="favorite-list">
          <FavoriteIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
        </IconButton>

        <IconButton className="text-black" aria-label="shopping-cart">
          <ShoppingCartIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
        </IconButton>
      </div>
    </header>
  );
}
export default HeaderBookPage;
