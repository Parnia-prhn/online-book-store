import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link, useLocation } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

function AddBookPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const option = searchParams.get("option");
  const bookId = new URLSearchParams(location.search).get("option");
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publisher: "",
    price: "",
  });
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  // const history = useHistory();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "https://file.io/?expires=1w",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        // Set the file URL in state
        setFileUrl(response.data.data.url);
      } else {
        console.error("Failed to upload file:", response.data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (e, userId, bookId, option) => {
    bookId = new URLSearchParams(location.search).get("option");
    option = searchParams.get("option");
    userId = localStorage.getItem("userId");

    e.preventDefault();
    setLoading(true);
    await uploadFile();
    try {
      let response;
      if (option === `${bookId}`) {
        response = axios.put(
          `http://localhost:3001/books/update/${userId}/${bookId}`,
          { ...bookData, image: fileUrl }
        );
        console.alert("Book updated successfully");
      } else {
        response = await axios.post(
          `http://localhost:3001/books/create/${userId}`,
          { ...bookData, image: fileUrl }
        );
        console.log("Book added successfully:", response.data);
        const bookId = response.data.savedBook._id;
        localStorage.setItem("bookId", bookId);
      }
      // window.location.href = "/profilepage";

      setLoading(false);
    } catch (error) {
      console.error("Error adding/updating book:", error);
    }
  };

  return (
    <div classNAme="justify-stretch">
      <div className="bg-yellow-500 rounded-lg m-5 p-5 border-4 border-black">
        <div className="flex justify-center text-center">
          <ul className="space-y-5 flex flex-col justify-end text-right">
            <form onSubmit={handleSubmit}>
              <li>
                <ul className="space-x-5 flex justify-center text-center ">
                  <li>
                    <TextField
                      id="title"
                      name="title"
                      label="title"
                      variant="outlined"
                      size="small"
                      // value={bookData.title}
                      onChange={handleInputChange}
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
                      id="author"
                      name="author"
                      label="author"
                      variant="outlined"
                      size="small"
                      // value={bookData.author}
                      onChange={handleInputChange}
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
                      id="genre"
                      name="genre"
                      label="genre"
                      variant="outlined"
                      size="small"
                      // value={bookData.genre}
                      onChange={handleInputChange}
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
                      id="publisher"
                      name="publisher"
                      label="publisher"
                      variant="outlined"
                      size="small"
                      // value={bookData.publisher}
                      onChange={handleInputChange}
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
                      id="price"
                      name="price"
                      label="price"
                      variant="outlined"
                      size="small"
                      // value={bookData.price}
                      onChange={handleInputChange}
                      className="bg-white flex"
                      sx={{ m: 1, width: 180, backgroundColor: "white" }}
                    />
                  </li>
                  <li className="font-yekan text-lg">قیمت</li>
                </ul>
              </li>
              <li>
                <ul className="space-x-5 flex justify-center text-center ">
                  <li>
                    <input
                      id="image"
                      name="image"
                      label="image"
                      variant="outlined"
                      size="small"
                      type="file"
                      accept=".jpg, .jpeg, .png, .pdf"
                      onChange={handleFileChange}
                      className="text-yellow-500 bg-black rounded-md "
                    />
                    {fileUrl && (
                      <div>
                        <p>Uploaded Image:</p>
                        <img src={fileUrl} alt="Uploaded" />
                      </div>
                    )}
                  </li>
                  <li className="font-yekan text-lg">تصویر</li>
                </ul>
              </li>
              <li className="justify-start text-left">
                <Button
                  type="submit"
                  // component={Link}
                  // to="/profilepage"
                  className="text-yellow-500 bg-black rounded-md pt-5 mt-5"
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
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddBookPage;
