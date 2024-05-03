import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import HeaderBookPage from "./parts/HeaderBookPage.js";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";

// Import some icons
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function BookPage() {
  // const books = [
  //   { id: 1, image: book1, name: "نام کتاب 1", price: "قیمت کتاب 1" },
  //   { id: 2, image: book2, name: "نام کتاب 2", price: "قیمت کتاب 2" },
  //   { id: 3, image: book3, name: "نام کتاب 3", price: "قیمت کتاب 3" },
  //   { id: 4, image: book4, name: "نام کتاب 4", price: "قیمت کتاب 4" },
  // ];
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async (bookId) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBook();
    return () => {};
  }, []);
  const [bookToBuy, setBookToBuy] = useState({
    bookId: "",
    quantity: "",
  });
  const handleButtonClickBuyBook = (userId) => {
    userId = localStorage.getItem("userId");
    axios
      .post(`http://localhost:3001/shoppingCart/addToCart/${userId}`, bookToBuy)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  const handleButtonClickFavoriteBook = (userId, bookId) => {
    userId = localStorage.getItem("userId");
    axios
      .post(`http://localhost:3001/users/addFavoriteBooks/${userId}/${bookId}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <HeaderBookPage />

      <ul className="space-x-8 flex justify-end mt-7 mb-7">
        <li className="p-10 font-yekan text-lg">
          <div className="mb-7 font-yekan text-lg">
            <b>book.title</b>
          </div>
          <div>book.author book.publisher book.price</div>
        </li>
        <li>
          <img src={book.image} alt="book4" className="flex w-1/2 p-6" />
        </li>
      </ul>
      <ul className="flex justify-start p-10">
        <li>
          <Button
            className="text-yellow-500 bg-black rounded-md"
            aria-label="sign-up"
            size="small"
            variant="contained"
            onClick={handleButtonClickBuyBook}
            //color="success"
            sx={{
              color: "#fdd400",
              fontSize: "1rem",
              padding: "9px 25px",
              margin: "5px",
            }}
            style={{
              borderRadius: 25,
              backgroundColor: "black",
            }}
          >
            افزودن به سبد خرید
          </Button>
        </li>
        <li>
          <IconButton
            className=" "
            onClick={handleButtonClickFavoriteBook}
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="favorite-list"
          >
            <FavoriteIcon className="" />
          </IconButton>
        </li>
        <li>
          <IconButton
            className=""
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="comment"
          >
            <CommentIcon className="" />
          </IconButton>
        </li>
      </ul>

      <ul className="flex justify-center p-6 space-x-4 mt-7">
        <li>
          <TextField
            label="نظر خود را بنویسید"
            variant="outlined"
            size="small"
            sx={{ m: 1, width: 700, backgroundColor: "white" }}
          />
        </li>
        <li>
          <IconButton
            edge="start"
            className=""
            sx={{
              bgcolor: "black",
              margin: "5px",
              "& svg": {
                fontSize: "1.5rem",
                color: "#FFEB3B",
              },
            }}
            aria-label="profile"
          >
            <AccountCircleIcon className="" />
          </IconButton>
        </li>
      </ul>
    </div>
  );
}
export default BookPage;
