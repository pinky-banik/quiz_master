import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [topics,setTopics] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setTopics(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-2xl shadow-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-900 text-lg font-bold"
            >
              <li><Link to ="/">Home</Link></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Topics
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100 shadow-md z-10">
                  {topics.map((list) => (
                    <li
                      key={list.id}
                      className="text-primary text-lg font-bold"
                    >
                      <Link to={`/catagory-quizes/${list.id}`}>
                        {list.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link to ="/">Statistics</Link></li>
              <li><Link to ="/">Blog</Link></li>
            </ul>
          </div>
          <Link
            to="/"
            className="cursor-pointer btn btn-ghost text-primary normal-case text-2xl lg:mx-20 hover:bg-base-100"
          >
            <img className="w-10 h-10 mx-2" src={logo} alt="logo" /> Quiz Master
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex px-20">
          <ul className="menu menu-horizontal p-0 text-gray-900 text-lg font-bold">
            <li><Link to ="/">Home</Link></li>
            <li tabIndex={0}>
              <a>
                Topics
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 shadow-md z-10">
                {topics.map((list) => (
                  <li key={list.id} className="text-primary text-lg font-bold">
                    <Link to={`/catagory-quizes/${list.id}`}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link to ="/">Statistics</Link></li>
            <li><Link to ="/">Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
