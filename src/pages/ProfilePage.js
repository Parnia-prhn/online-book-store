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
  const books = [
    { id: 1, image: book1, name: "نام کتاب 1", price: "قیمت کتاب 1" },
    { id: 2, image: book2, name: "نام کتاب 2", price: "قیمت کتاب 2" },
    { id: 3, image: book3, name: "نام کتاب 3", price: "قیمت کتاب 3" },
    { id: 4, image: book4, name: "نام کتاب 4", price: "قیمت کتاب 4" },
  ];
  return (
    <div className="justify-center">
      <HeaderProfilePage />

      <div className="flex justify-center p-5 mt-14 mb-5 font-yekan text-lg">
        نام و توضیحات کاربر
      </div>

      <div className="text-right text-black p-7 font-yekan text-lg">
        کتاب های خریداری شده
      </div>
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

      <div className="text-right text-black p-7 font-yekan text-lg">
        کتاب های پسندیده شده
      </div>
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
      <div className="text-right text-black p-7 font-yekan text-lg">
        کتاب های من
      </div>
      <ul className="space-x-12 flex justify-self-end ml-5 mb-7">
        {books.map((book) => (
          <li key={book.id}>
            <Link to="/bookpage">
              <img
                src={book.image}
                alt={`book${book.id}`}
                className="flex w-1/2 mb-1"
              />
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
            <div className="font-yekan text-base mb-3">{book.name}</div>
            <div className="font-yekan text-base">{book.price}</div>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}
export default ProfilePage;
