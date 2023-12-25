import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import Header from "./parts/HeaderHomePage.js";
import Footer from "./parts/Footer.js";

function HomePage() {
  return (
    <div className="home-page ">
      <Header />

      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mt-8 mb-5 font-yekan text-lg">
          پر فروشترین ها
        </div>
      </Link>

      <ul className="space-x-12 flex justify-end p-5">
        <Link to="/bookpage">
          <li>
            <img src={book1} alt="book1" className="w-1/2 mb-3 " />
            <div className="font-yekan text-base mb-3 ">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book2} alt="book2" className="w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book3} alt="book3" className="w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book4} alt="book4" className="w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
      </ul>
      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mb-5 font-yekan text-lg">
          ژانر ها
        </div>
      </Link>
      <div className="bg-yellow-500 p-10 rounded ">
        <ul className="space-x-16 flex justify-center text-center">
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500 font-yekan text-lg"
            >
              زندگینامه
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500 font-yekan text-lg"
            >
              شعر
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500 font-yekan text-lg"
            >
              ادبیات جهان
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500 font-yekan text-lg"
            >
              ادبیات ایران
            </li>
          </Link>
        </ul>
      </div>
      <Link to="/booklistpage">
        <div className="text-right text-black p-7 mt-7 mb-5 font-yekan text-lg">
          پیشنهادی برای شما
        </div>
      </Link>
      <ul className="space-x-12 flex justify-self-end p-5">
        <Link to="/bookpage">
          <li>
            <img src={book1} alt="book1" className="flex w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book2} alt="book2" className="flex w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book3} alt="book3" className="flex w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src={book4} alt="book4" className="flex w-1/2 mb-3" />
            <div className="font-yekan text-base mb-3">نام کتاب</div>
            <div className="font-yekan text-base">قیمت کتاب</div>
          </li>
        </Link>
      </ul>
      <Footer className="mt-7" />
    </div>
  );
}
export default HomePage;
