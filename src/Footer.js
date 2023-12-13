import React from "react";
import ReactDOM from "react-dom/client";
//icons
import { IoLogoInstagram } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { FaBookOpen } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-500 rounded-t-lg p-20">
      {/* <div className="flex justify-end">
        <ul className=" space-y-3">
          <li>
            <IoLogoInstagram className="bg-black text-yellow-500 rounded-full " />
          </li>

          <li>
            <MdAlternateEmail className="bg-black text-yellow-500 rounded-full" />
          </li>

          <li>
            <LiaTelegram className="bg-black text-yellow-500 rounded-full" />
          </li>
        </ul>
      </div> */}
      <div className="">
        <ul className="space-x-10">
          <li>
            <div className="flex justify-end">
              <ul className=" space-y-3">
                <li>
                  <IoLogoInstagram className="bg-black text-yellow-500 rounded-full " />
                </li>

                <li>
                  <MdAlternateEmail className="bg-black text-yellow-500 rounded-full" />
                </li>

                <li>
                  <LiaTelegram className="bg-black text-yellow-500 rounded-full" />
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="flex justify-center">توضیحات اصلی</div>
          </li>
          <li>
            <div className="flex justify-start">
              <FaBookOpen className="text-8xl" />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
