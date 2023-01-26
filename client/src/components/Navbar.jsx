import React from "react";
import {
  IconInbox,
  IconListCheck,
  IconCalendarEvent,
  IconBrandShopee,
  IconUser,
  IconDashboard,
  IconLayoutDashboard,
} from "@tabler/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-layout-dashboard"
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
              <path d="M4 4h6v8h-6zm0 12h6v4h-6zm10 -4h6v8h-6zm0 -8h6v4h-6z"></path>
            </svg>
            <span className="link-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home-2"
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
              <path d="M5 12l-2 0l9 -9l9 9l-2 0m-14 0v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7m-9 0h4v4h-4z"></path>
            </svg>
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shopping-bag"
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
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304zm2.669 3v-5a3 3 0 0 1 6 0v5"></path>
            </svg>
            <span className="link-text">Products</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-loader"
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
              <path d="M12 6l0 -3m4.25 4.75l2.15 -2.15m-.4 6.4l3 0m-4.75 4.25l2.15 2.15m-6.4 -.4l0 3m-4.25 -4.75l-2.15 2.15m.4 -6.4l-3 0m4.75 -4.25l-2.15 -2.15"></path>
            </svg>
            <span className="link-text">Transactions</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chart-bar"
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
              <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1zm6 -5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1zm6 -5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1zm-11 15l14 0"></path>
            </svg>
            <span className="link-text">Statistics</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
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
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2m-7 -4h14l-3 -3m0 6l3 -3"></path>
            </svg>
            <span className="link-text">Log Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
