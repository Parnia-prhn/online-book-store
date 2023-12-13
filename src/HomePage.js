import React from "react";
import ReactDOM from "react-dom/client";
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
      <div className="text-right text-black p-7">پر فروشترین ها</div>
      <br />
      <br />
      <ul className="space-x-12 flex justify-end p-5">
        <li>
          <img src="/book1.jpg" alt="book1" className="w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book2.jpg" alt="book2" className="w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book3.jpg" alt="book3" className="w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book4.jpg" alt="book4" className="w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>
      </ul>

      <div className="text-right text-black p-7">ژانر ها</div>
      <br />
      <div className="bg-yellow-500 p-10 rounded ">
        <ul className="space-x-16 flex justify-center text-center">
          <li
            link
            to="book-list-page"
            className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
          >
            زندگینامه
          </li>

          <li
            link
            to="book-list-page"
            className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
          >
            شعر
          </li>

          <li
            link
            to="book-list-page"
            className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
          >
            ادبیات جهان
          </li>

          <li
            link
            to="book-list-page"
            className="bg-black p-7 rounded-full w-40 border-8 border-white text-yellow-500"
          >
            ادبیات ایران
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <div className="text-right text-black p-7">پیشنهادی برای شما</div>
      <br />
      <ul className="space-x-12 flex justify-self-end p-5">
        <li>
          <img src="/book1.jpg" alt="book1" className="flex w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book2.jpg" alt="book2" className="flex w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book3.jpg" alt="book3" className="flex w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>

        <li>
          <img src="/book4.jpg" alt="book4" className="flex w-1/2" />
          <br />
          <div className="">نام کتاب</div>
          <br />
          <div>قیمت کتاب</div>
        </li>
      </ul>
      <br />
      <Footer />
    </div>
  );
}
export default HomePage;
