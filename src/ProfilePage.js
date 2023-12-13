import React from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// Import some icons

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function ProfilePage() {
  return (
    <div className="justify-center">
      <br />
      <br />
      <br />
      <div className="flex justify-center p-5">نام و توضیحات کاربر</div>
      <br />
      <br />

      <div className="text-right text-black p-7">کتاب های خریداری شده</div>
      <ul className="space-x-12 flex justify-self-end">
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

      <div className="text-right text-black p-7">کتاب های پسندیده شده</div>
      <ul className="space-x-12 flex justify-self-end">
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

      <div className="text-right text-black p-7">کتاب های من</div>
      <ul className="space-x-12 flex justify-self-end">
        <li>
          <img src="/book1.jpg" alt="book1" className="flex w-1/2" />
          <ul className="space-x-0 flex flex-row">
            <li>
              <MdEdit className="bg-black text-yellow-500 rounded-full" />
            </li>
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
          <img src="/book2.jpg" alt="book2" className="flex w-1/2" />
          <ul className="space-x-0 flex flex-row">
            <li>
              <MdEdit className="bg-black text-yellow-500 rounded-full" />
            </li>
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
          <img src="/book3.jpg" alt="book3" className="flex w-1/2" />
          <ul className="space-x-0 flex flex-row">
            <li>
              <MdEdit className="bg-black text-yellow-500 rounded-full" />
            </li>
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
          <img src="/book4.jpg" alt="book4" className="flex w-1/2" />
          <ul className="space-x-0 flex flex-row">
            <li>
              <MdEdit className="bg-black text-yellow-500 rounded-full" />
            </li>
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
    </div>
  );
}
export default ProfilePage;
