import React, { useState } from "react";
import {
  IconBell,
  IconUser,
  IconShoppingCart,
  IconSearch,
  IconX,
} from "@tabler/icons";

const Header = () => {
  const [search, setsearch] = useState(false);
  const handleSearch = () => {
    setsearch(!search);
  };
  const handleQuery = () => {};
  return (
    <div className="header">
      {!search ? (
        <div className="header-items">
          <button
            className="header-item"
            onClick={(e) => {
              handleSearch();
            }}
          >
            {/* search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0m18 11l-6 -6"></path>
            </svg>
          </button>
          
          <div className="header-item">
            {/* bell */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bell"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6m-1 12v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
          </div>

          <div className="header-item">
            <div className="username">
              <div className="name">nox dox</div>
              <div className="designation">admin</div>
            </div>
            &nbsp;
            {/* user */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m-2 14v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className="header-search">
          <div className="header-search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0m18 11l-6 -6"></path>
            </svg>
          </div>
          <div className="header-search-item">
            <input
              type="text"
              placeholder="Your search goes here"
              name="search"
              onChange={handleQuery}
            />
          </div>
          <div className="header-item">
            <button
              onClick={(e) => {
                handleSearch();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M18 6l-12 12m0 -12l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
