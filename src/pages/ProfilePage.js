import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const [boughtBooks, setBoughtBooks] = useState([]);

  useEffect((userId) => {
    const fetchBoughtBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/shoppingCart/allBought/${userId}`
        );
        setBoughtBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBoughtBooks();
    return () => {};
  }, []);

  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect((userId) => {
    const fetchFavoriteBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/books/favoriteBooks/${userId}`
        );
        setFavoriteBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchFavoriteBooks();
    return () => {};
  }, []);

  const [addedbooks, setAddedbooks] = useState([]);

  useEffect((userId) => {
    const fetchAddedbooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/users/addedbooks/${userId}`
        );
        setAddedbooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchAddedbooks();
    return () => {};
  }, []);
  const handleDeleteBook = (userId, bookId) => {
    // Send a DELETE request to delete the book with the specified id
    axios
      .delete(`http://localhost:3001/books/delete/${userId}/${bookId}`)
      .then((response) => {
        // If deletion is successful, update the books state to remove the deleted book
        setAddedbooks((prevBooks) =>
          prevBooks.filter((book) => book.id !== bookId)
        );
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
      });
  };

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
        {boughtBooks.map((book) => (
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

      <div className="text-right text-black p-7 font-yekan text-lg">
        کتاب های پسندیده شده
      </div>
      <ul className="space-x-12 flex justify-end p-5">
        {favoriteBooks.map((book) => (
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
      <div className="text-right text-black p-7 font-yekan text-lg">
        کتاب های من
      </div>
      <ul className="space-x-12 flex justify-self-end ml-5 mb-7">
        {addedbooks.map((book) => (
          <li key={book.id}>
            <Link to="/bookpage">
              <img
                src={book.image}
                alt={`book${book.id}`}
                className="flex w-1/2 mb-1"
              />
            </Link>
            <ul className="space-x-0 flex flex-row mb-3">
              <Link to={`/editbookpage/${book.userIdCreator}/${book.id}`}>
                <li>
                  <MdEdit className="bg-black text-yellow-500 rounded-full mr-2" />
                </li>
              </Link>
              <li>
                <MdDelete
                  className="bg-black text-yellow-500 rounded-full"
                  onClick={() => handleDeleteBook(book.userIdCreator, book.id)}
                />
              </li>
            </ul>
            <div className="font-yekan text-base mb-3">{book.title}</div>
            <div className="font-yekan text-base">{book.price}</div>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}
export default ProfilePage;
