import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../pages/parts/HeaderHomePage.js";
import HomePage from "../pages/HomePage.js";
import Footer from "../pages/parts/Footer.js";
import LoginPage from "../pages/LoginPage.js";
import SignupPage from "../pages/SignupPage.js";
import HeaderProfilePage from "../pages/parts/HeaderProfilePage.js";
import ProfilePage from "../pages/ProfilePage.js";
import AddBookPage from "../pages/AddBookPage.js";
import HeaderBookPage from "../pages/parts/HeaderBookPage.js";
import BookListPage from "../pages/BookListPage.js";
import BookPage from "../pages/BookPage.js";

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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/booklistpage" element={<BookListPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/addbookpage" element={<AddBookPage />} />
        <Route path="/bookpage" element={<BookPage />} />
        <Route path="/signuppage" element={<LoginPage />} />
      </Routes>
      {/* <Header /> */}
      {/* <HomePage /> */}
      {/* <Footer /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
      {/* <HeaderProfilePage /> */}
      {/* <ProfilePage /> */}
      {/* <Footer /> */}
      {/* <AddBookPage /> */}
      {/* <HeaderBookPage /> */}
      {/* <BookListPage /> */}
      {/* <BookPage /> */}
    </div>
  );
}

export default App;
