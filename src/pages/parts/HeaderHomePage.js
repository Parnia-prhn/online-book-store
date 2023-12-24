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

function Header() {
  return (
    <header className="bg-yellow-500 rounded-b-lg p-10  ">
      <div className=" px-4 py-2">
        <Link to="/profilepage">
          <IconButton
            edge="start"
            className="text-white bg-black rounded-full p-1"
            aria-label="profile"
          >
            <AccountCircleIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </Link>
        <Link to="/booklistpage">
          <IconButton className="text-black " aria-label="favorite-list">
            <FavoriteIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </Link>
        <Link to="/booklistpage">
          <IconButton className="text-black" aria-label="shopping-cart">
            <ShoppingCartIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </Link>
        <Link to="/addbookpage">
          <IconButton className="text-black" aria-label="add-book">
            <AddIcon className="text-yellow-500 bg-black w-40 h-40 rounded-full" />
          </IconButton>
        </Link>
        <Button
          component={Link}
          to="/signuppage"
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
          ثبت نام
        </Button>
      </div>

      <div className="text-center">
        <Link to="/booklistpage">
          <IconButton className="" aria-label="search">
            <SearchIcon
              edge="start"
              color="default"
              aria-label="menu"
              className="text-yellow-500 w-20 h-20 bg-black rounded-full"
            />
          </IconButton>
        </Link>

        <TextField
          label="جستجو کنید"
          variant="outlined"
          size="small"
          className="bg-white flex"
          sx={{ m: 1, width: 500 }}
        />
      </div>

      <nav>
        <ul className="flex space-x-12 text-center justify-center translate-y-1/4 ">
          <Link to="/booklistpage">
            <li className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2 ">
              پرفروشترین ها
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2"
            >
              پر بازدید ترین ها
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2"
            >
              پیشنهادی
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2"
            >
              جدیدترین ها
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
