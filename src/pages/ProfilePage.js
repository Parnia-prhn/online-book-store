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
      <br />
      <br />
      <br />
      <div className="flex justify-center p-5">نام و توضیحات کاربر</div>
      <br />
      <br />

      <div className="text-right text-black p-7">کتاب های خریداری شده</div>
      <ul className="space-x-12 flex justify-self-end">
        <Link to="/bookpage">
          <li>
            <img src={book1} alt="book1" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book2} alt="book2" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book3} alt="book3" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book4} alt="book4" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
      </ul>

      <div className="text-right text-black p-7">کتاب های پسندیده شده</div>
      <ul className="space-x-12 flex justify-self-end">
        <Link to="/bookpage">
          <li>
            <img src={book1} alt="book1" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book2} alt="book2" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book3} alt="book3" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book4} alt="book4" className="flex w-1/2" />

            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
      </ul>

      <div className="text-right text-black p-7">کتاب های من</div>
      <ul className="space-x-12 flex justify-self-end">
        <li>
          <Link to="/bookpage">
            <img src={book1} alt="book1" className="flex w-1/2" />
          </Link>
          <ul className="space-x-0 flex flex-row">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>

          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book2} alt="book2" className="flex w-1/2" />
          </Link>
          <ul className="space-x-0 flex flex-row">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book3} alt="book3" className="flex w-1/2" />
          </Link>
          <ul className="space-x-0 flex flex-row">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <Link to="/bookpage">
            <img src={book4} alt="book4" className="flex w-1/2" />
          </Link>
          <ul className="space-x-0 flex flex-row">
            <Link to="/addbookpage">
              <li>
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
              </li>
            </Link>
            <li>
              <MdDelete className="bg-black text-yellow-500 rounded-full" />
            </li>
          </ul>
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>
      </ul>

      <br />
      <br />
      <Footer />
    </div>
  );
}
export default ProfilePage;
