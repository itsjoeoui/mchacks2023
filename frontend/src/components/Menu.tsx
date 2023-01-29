import React from 'react';
import {useState, useEffect} from "react";
import UserService from "./UserService";
import {User} from "./UserService"
import { FiUser, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Menu() {
  const [user, setUser] = useState<User>()
  useEffect(() => {
    UserService.User.details().then((data) => {
      setUser(data)
    })
  })

  return (
    <div className="mb-8 mt-4">
      <div className="px-8 py-3 border-y border-black flex justify-between items-center">
        <img
          src="https://radish.coop/assets/images/radish-logos/Radish-Logo-BlackText-Large.png"
          alt="Radish"
          className="w-[150px] h-fit"
        />

        <button>Order</button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FiUser size={30} strokeWidth={1} />
            <span>randomuser</span>
          </div>
          <div className="flex items-center gap-1">
            <FiDollarSign size={30} strokeWidth={1} />
            <span>5,000,000</span>
          </div>
        </div>
      </div>
      <nav className="flex justify-evenly items-center border-b border-black py-1">
        <Link to="/restaurants" className="hover:opacity-70">
          Restaurants
        </Link>
        <Link to="/" className="hover:opacity-70">
          Battle Pass
        </Link>
      </nav>
    </div>
  );
}
