import React from "react";
import { useState, useEffect } from "react";
import UserService from "./UserService";
import { User } from "./UserService";
import { FiUser, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Menu() {
  const auth = useAuth();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserService.User.details(1).then((data) => {
      setUser(data);
    });
  }, []);
  return (
    <div className="mb-8 px-8">
      <div className="py-5 pb-0 flex justify-between items-center">
        <img
          src="https://radish.coop/assets/images/radish-logos/Radish-Logo-BlackText-Large.png"
          alt="Radish"
          className="w-[150px] h-fit"
        />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FiUser size={30} strokeWidth={1} />
            <span>{user?.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiDollarSign size={30} strokeWidth={1} />
            <span>{user?.coin}</span>
          </div>
        </div>
      </div>

      <nav className="flex justify-end gap-4 flex-row py-1 text-xl">
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
