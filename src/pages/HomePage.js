import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import Header from "./parts/HeaderHomePage.js";
import Footer from "./parts/Footer.js";

function HomePage() {
  const [mostSoldBooks, setMostSoldBooks] = useState([]);

  useEffect(() => {
    const fetchMostSoldBooks = async () => {
      try {
        const response = await axios.get("/shoppingCart/mostSold");
        setMostSoldBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchMostSoldBooks();
    return () => {};
  }, []);

  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      try {
        const response = await axios.get("/books/favoriteGenre/:userId");
        setRecommendedBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchRecommendedBooks();
    return () => {};
  }, []);
  function GenreLink({ genre }) {
    return (
      <Link to={`/booklistpage/${genre}`}>
        <li className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500 font-yekan text-lg">
          {genre}
        </li>
      </Link>
    );
  }
  return (
    <div className="home-page">
      <Header />

      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mt-8 mb-5 font-yekan text-lg">
          پر فروشترین ها
        </div>
      </Link>

      <ul className="space-x-12 flex justify-end p-5">
        {mostSoldBooks.map((book) => (
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
      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mb-5 font-yekan text-lg">
          ژانر ها
        </div>
      </Link>
      <div className="bg-yellow-500 p-10 rounded ">
        <ul className="space-x-16 flex justify-center text-center">
          <li>
            <GenreLink genre="زندگینامه" />
          </li>
          <li>
            <GenreLink genre="شعر" />
          </li>
          <li>
            <GenreLink genre="ادبیات جهان" />
          </li>
          <li>
            <GenreLink genre="ادبیات ایران" />
          </li>
        </ul>
      </div>
      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mt-7 mb-5 font-yekan text-lg">
          پیشنهادی برای شما
        </div>
      </Link>
      <ul className="space-x-12 flex justify-end p-5">
        {recommendedBooks.map((book) => (
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
      <Footer className="mt-7" />
    </div>
  );
}
export default HomePage;
