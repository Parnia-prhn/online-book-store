import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import axios from "axios";
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

function BookListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
    return () => {};
  }, []);
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
                  <div className="font-yekan text-base mb-3 ">{book.title}</div>
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
                  <div className="font-yekan text-base mb-3 ">{book.title}</div>
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
