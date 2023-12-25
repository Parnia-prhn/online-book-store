import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import HeaderProfilePage from "./parts/HeaderProfilePage.js";
import Footer from "./parts/Footer.js";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";

// Import some icons

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ProfilePage() {
  return (
    <div className="justify-center">
      <HeaderProfilePage />

      <div className="flex justify-center p-5 mt-14 mb-5">
        نام و توضیحات کاربر
      </div>

      <div className="text-right text-black p-7">کتاب های خریداری شده</div>
      <ul className="space-x-12 flex justify-self-end ml-5">
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

      <div className="text-right text-black p-7">کتاب های پسندیده شده</div>
      <ul className="space-x-12 flex justify-self-end ml-5">
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

      <div className="text-right text-black p-7">کتاب های من</div>
      <ul className="space-x-12 flex justify-self-end ml-5 mb-7">
        <li>
          <Link to="/bookpage">
            <img src={book1} alt="book1" className="flex w-1/2 mb-1" />
          </Link>
          <ul className="space-x-0 flex flex-row mb-3">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full mr-2 " />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <div className="mb-3">نام کتاب</div>
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book2} alt="book2" className="flex w-1/2 mb-1" />
          </Link>
          <ul className="space-x-0 flex flex-row mb-3">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full mr-2" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <div className="mb-3">نام کتاب</div>
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book3} alt="book3" className="flex w-1/2 mb-1" />
          </Link>
          <ul className="space-x-0 flex flex-row mb-3">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full mr-2" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <div className="mb-3">نام کتاب</div>
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book4} alt="book4" className="flex w-1/2 mb-1" />
          </Link>
          <ul className="space-x-0 flex flex-row mb-3">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full mr-2" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <div className="mb-3">نام کتاب</div>
          <div>قیمت کتاب</div>
        </li>
      </ul>

      <Footer />
    </div>
  );
}
export default ProfilePage;
