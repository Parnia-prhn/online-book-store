import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";

import Header from "./HeaderHomePage.js";
import Footer from "./Footer.js";

function HomePage() {
  return (
    <div className="home-page ">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Link to="/booklistpage">
        <div className="text-right text-black p-7">پر فروشترین ها</div>
      </Link>
      <br />
      <br />
      <ul className="space-x-12 flex justify-end p-5">
        <Link to="/bookpage">
          <li>
            <img src="/book1.jpg" alt="book1" className="w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book2.jpg" alt="book2" className="w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book3.jpg" alt="book3" className="w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book4.jpg" alt="book4" className="w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
      </ul>
      <Link to="/booklistpage">
        <div className="text-right text-black p-7">ژانر ها</div>
      </Link>
      <br />
      <div className="bg-yellow-500 p-10 rounded ">
        <ul className="space-x-16 flex justify-center text-center">
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
            >
              زندگینامه
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
            >
              شعر
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
            >
              ادبیات جهان
            </li>
          </Link>
          <Link to="/booklistpage">
            <li
              link
              to="book-list-page"
              className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
            >
              ادبیات ایران
            </li>
          </Link>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <Link to="/booklistpage">
        <div className="text-right text-black p-7">پیشنهادی برای شما</div>
      </Link>
      <br />
      <ul className="space-x-12 flex justify-self-end p-5">
        <Link to="/bookpage">
          <li>
            <img src="/book1.jpg" alt="book1" className="flex w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book2.jpg" alt="book2" className="flex w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book3.jpg" alt="book3" className="flex w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
        <Link to="/bookpage">
          <li>
            <img src="/book4.jpg" alt="book4" className="flex w-1/2" />
            <br />
            <div className="">نام کتاب</div>
            <br />
            <div>قیمت کتاب</div>
          </li>
        </Link>
      </ul>
      <br />
      <Footer />
    </div>
  );
}
export default HomePage;
