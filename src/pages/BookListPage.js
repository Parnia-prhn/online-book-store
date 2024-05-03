import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";

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
  const userId = localStorage.getItem("userId");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const option = searchParams.get("option");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async (option, genre) => {
      option = searchParams.get("option");
      try {
        setLoading(true);
        let response;
        if (option === "all-books") {
          response = await axios.get("http://localhost:3001/books");
        } else if (option === "most-sold") {
          response = await axios.get(
            "http://localhost:3001/shoppingCart/mostSold"
          );
        } else if (option === "recomended-books") {
          response = await axios.get(
            `http://localhost:3001/books/favoriteGenre/${userId}`
          );
        } else if (option === `genre-${genre}`) {
          response = await axios.get(
            `http://localhost:3001/books/genre/${genre}`
          );
        } else if (option === "bought-books") {
          response = await axios.get(
            `http://localhost:3001/shoppingCart/allBought/${userId}`
          );
        } else if (option === "favorite-books") {
          response = await axios.get(
            `http://localhost:3001/books/favoriteBooks/${userId}`
          );
        } else if (option === "added-books") {
          response = await axios.get(
            `http://localhost:3001/users/addedbooks/${userId}`
          );
        } else if (option === "cart") {
          response = await axios.get(
            `http://localhost:3001/shoppingCart/cart/${userId}`
          );
        } else {
          response = await axios.get("http://localhost:3001/books");
        }

        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
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
              <Link to={`/bookpage?bookId=${book._id}`} key={book.id}>
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
          {/* <ul className="space-x-12 flex justify-end p-5">
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
          </ul> */}
        </li>
      </ul>
    </div>
  );
}
export default BookListPage;
