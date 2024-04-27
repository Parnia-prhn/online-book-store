import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import yellow from "@mui/material/colors/yellow";
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
            className=""
            aria-label="profile"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
          >
            <AccountCircleIcon className="" />
          </IconButton>
        </Link>
        <Link to="/booklistpage">
          <IconButton
            className=""
            aria-label="favorite-list"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
          >
            <FavoriteIcon className="" />
          </IconButton>
        </Link>
        <Link to="/booklistpage">
          <IconButton
            className=""
            aria-label="shopping-cart"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
          >
            <ShoppingCartIcon className="" />
          </IconButton>
        </Link>
        <Link to="/addbookpage">
          <IconButton
            className=""
            aria-label="add-book"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
          >
            <AddIcon className="" />
          </IconButton>
        </Link>
        <Button
          component={Link}
          to="/loginpage"
          className=" font-yekan"
          aria-label="login"
          size="small"
          variant="contained"
          //color="success"
          sx={{
            color: "#fdd400",
            fontSize: "1rem",
            padding: "10px 26px",
            margin: "5px",
          }}
          style={{
            borderRadius: 25,
            backgroundColor: "black",
          }}
        >
          ورود به حساب کاربری
        </Button>
      </div>

      <div className="text-center mt-10">
        <Link to="/booklistpage">
          <IconButton
            className=""
            aria-label="search"
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
          >
            <SearchIcon
              edge="start"
              color="default"
              aria-label="search"
              className=""
            />
          </IconButton>
        </Link>

        <TextField
          label="جستجو کنید"
          variant="outlined"
          size="small"
          className="flex"
          sx={{ m: 1, width: 500, backgroundColor: "white" }}
        />
      </div>

      <nav>
        <ul className="flex space-x-12 text-center justify-center translate-y-1/4 ">
          <Link to="/booklistpage">
            <li className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2 font-yekan text-lg">
              پرفروشترین ها
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2 font-yekan text-lg"
            >
              پر بازدید ترین ها
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2 font-yekan text-lg"
            >
              پیشنهادی
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="BookListPage"
              className="bg-black rounded-full w-40 h-40 flex items-center justify-center border-8 border-yellow-500 text-yellow-500 hover:text-white transform translate-y-1/2 font-yekan text-lg"
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
