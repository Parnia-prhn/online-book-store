import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

function AddBookPage() {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    genre: "",
    publisher: "",
    price: "",
  });
  const history = useHistory();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/books/create/${bookData.userIdCreator}`, // Replace userId with actual user id
        bookData
      );
      console.log("Book added successfully:", response.data);
      history.push("/profilepage");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };
  return (
    <div classNAme="justify-stretch">
      <div className="bg-yellow-500 rounded-lg m-5 p-5 border-4 border-black">
        <div className="flex justify-center text-center">
          <ul className="space-y-5 flex flex-col justify-end text-right">
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="book-name"
                    variant="outlined"
                    size="small"
                    className="flex "
                    sx={{ m: 1, width: 180, backgroundColor: "white" }}
                  />
                </li>
                <li className="font-yekan text-lg">نام کتاب</li>
              </ul>
            </li>

            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="author"
                    variant="outlined"
                    size="small"
                    className="bg-white flex"
                    sx={{ m: 1, width: 180, backgroundColor: "white" }}
                  />
                </li>
                <li className="font-yekan text-lg">نویسنده</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="genre"
                    variant="outlined"
                    size="small"
                    className="bg-white flex"
                    sx={{ m: 1, width: 180, backgroundColor: "white" }}
                  />
                </li>
                <li className="font-yekan text-lg">ژانر</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="publisher"
                    variant="outlined"
                    size="small"
                    className="bg-white flex"
                    sx={{ m: 1, width: 180, backgroundColor: "white" }}
                  />
                </li>
                <li className="font-yekan text-lg">ناشر</li>
              </ul>
            </li>
            <li>
              <ul className="space-x-5 flex justify-center text-center ">
                <li>
                  <TextField
                    label="price"
                    variant="outlined"
                    size="small"
                    className="bg-white flex"
                    sx={{ m: 1, width: 180, backgroundColor: "white" }}
                  />
                </li>
                <li className="font-yekan text-lg">قیمت</li>
              </ul>
            </li>
            <li className="justify-start text-left">
              <Button
                component={Link}
                to="/profilepage"
                className="text-yellow-500 bg-black rounded-md"
                aria-label="sign-up"
                size="small"
                variant="contained"
                //color="success"
                sx={{ color: "#fdd400" }}
                style={{
                  borderRadius: 25,
                  backgroundColor: "black",
                }}
              >
                تایید
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AddBookPage;
