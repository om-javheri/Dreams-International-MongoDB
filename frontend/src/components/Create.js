import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Concert(loginID) {
  const navigate = useNavigate();
const [status,setStatus]=useState()
  const [values, setValues] = useState({
    id:"",
    cover: "",
    title: "",
    description: "",
    genre: "",
    publishDate:"",
    price:"",
    tags:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8081/Create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
author_id:loginID.loginID,
    cover: values.cover,
        title: values.title,
        description: values.description,
        genre: values.genre,
        publishDate: values.publishDate,

        price: values.price,

        tags: values.tags,

        status: status,


      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          navigate("/ShowAndBook");
        } else {
          console.log(data);
          navigate("/ShowAndBook");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <div className="flex">
        <form className="center2">
          <h3 className="colorw text-center"> New Book Entry</h3>

          <table className="table2">
            <thead className="tbody">
              <tr>
                <th>
                  {" "}
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3 "
                  >
                    Cover
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    
                    name="cover"
                    className=" my-2  "
                    id="Concert_Name"
                    placeholder="Enter Cover"
                    onChange={handleInput}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3"
                  >
                    Title
                  </label>
                </th>
                <th>
                  <input
                    type="email"
                    onChange={handleInput}
                    name="title"
                    className="my-2 mx-3 "
                    id="Team_Name"
                    placeholder="Enter Title"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className=" mb-3 my-3 mx-3 "
                  >
                    Description
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="description"
                    className=""
                    id="Ticket_Fee"
                    placeholder="Enter Description"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-5"
                    type="date"
                  >
                    Genre
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="genre"
                    className="my-2 mx-1"
                    id="date"
                    placeholder="Enter Genre"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  {" "}
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3 "
                  >
                    Publishing Date
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="publishDate"
                    className=" my-2  "
                    id="Concert_Name"
                    placeholder="Enter Pubishing Date"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-3"
                  >
                    Price
                  </label>
                </th>
                <th>
                  <input
                    type="number"
                    onChange={handleInput}
                    name="price"
                    className="my-2 mx-3 "
                    id="Team_Name"
                    placeholder="Enter Price"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className=" mb-3 my-3 mx-3 "
                  >
                    #Tags
                  </label>
                </th>
                <th>
                  <input
                    type="text"
                    onChange={handleInput}
                    name="tags"
                    className=""
                    id="Ticket_Fee"
                    placeholder="#Tags"
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label mb-3 my-3 mx-5"
                    type="radio"
                  >
                    Status
                  </label>
                </th>
                <th>
                  <input
                    type="radio"
                    onClick={()=>{setStatus("Draft")}}
                    name="status"
                    className="my-2 mx-1"
                    id="date"
                  />Draft
                  <input
                    type="radio"
                    onClick={()=>{setStatus("Published")}}
                    name="status"
                    className="my-2 mx-1"
                    id="date"
                  />Published
                </th>
              </tr>
            </thead>
            <tbody className="tbody"></tbody>
          </table>

          <div className="center2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
