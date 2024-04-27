import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import LoginPage from "../pages/LoginPage.js";
import SignupPage from "../pages/SignupPage.js";
import ProfilePage from "../pages/ProfilePage.js";
import AddBookPage from "../pages/AddBookPage.js";
import BookListPage from "../pages/BookListPage.js";
import BookPage from "../pages/BookPage.js";

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
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
