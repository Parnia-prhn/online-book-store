import React from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
// Import some icons
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SettingsIcon from "@mui/icons-material/Settings";
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
      <div>
        <ul className="space-y-5 justify-center">
          <li>
            <div classNAme="text-right justify-end">کتاب های خریداری شده</div>
            <ul className="space-x-12 flex ">
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
          </li>
          <li>
            <div>کتاب های پسندیده شده</div>
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
          </li>
          <li>
            <div>کتاب های من</div>
            <ul className="space-x-12 flex justify-self-end">
              <li>
                <img src="/book1.jpg" alt="book1" className="flex w-1/2" />
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
                <MdDelete className="bg-black text-yellow-500 rounded-full" />
                <br />
                <div className="">نام کتاب</div>
                <br />
                <div>قیمت کتاب</div>
              </li>

              <li>
                <img src="/book2.jpg" alt="book2" className="flex w-1/2" />
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
                <MdDelete className="bg-black text-yellow-500 rounded-full" />
                <br />
                <div className="">نام کتاب</div>
                <br />
                <div>قیمت کتاب</div>
              </li>

              <li>
                <img src="/book3.jpg" alt="book3" className="flex w-1/2" />
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
                <MdDelete className="bg-black text-yellow-500 rounded-full" />
                <br />
                <div className="">نام کتاب</div>
                <br />
                <div>قیمت کتاب</div>
              </li>

              <li>
                <img src="/book4.jpg" alt="book4" className="flex w-1/2" />
                <MdEdit className="bg-black text-yellow-500 rounded-full" />
                <MdDelete className="bg-black text-yellow-500 rounded-full" />
                <br />
                <div className="">نام کتاب</div>
                <br />
                <div>قیمت کتاب</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}
export default ProfilePage;
