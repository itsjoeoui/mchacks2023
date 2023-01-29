import React from "react";
import { useState, useEffect } from "react";
import UserService from "./UserService";
import { User } from "./UserService";
import { FiUser, FiDollarSign, FiMenu, FiCoffee, FiStar, FiKey,} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const user = useAuth();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="mb-8 px-8 relative">
      <div className="py-5 pb-0 flex justify-between items-center">
        <Link to="/">
          <img
            src="https://radish.coop/assets/images/radish-logos/Radish-Logo-BlackText-Large.png"
            alt="Radish"
            className="w-[150px] h-fit"
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-1">
            <FiUser size={30} strokeWidth={1} />
            <span>{user?.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiDollarSign size={30} strokeWidth={1} />
            <span>{user?.coin}</span>
          </div>
          <div>
            <FiMenu
              className="cursor-pointer"
              size={30}
              strokeWidth={1}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col text-xl absolute right-8 bg-white border border-black rounded z-50">
          {[
            { name: "Restaurants", to: "/", logo:<FiCoffee strokeWidth={1} size={25} />},
            { name: "Battle Pass", to: "/battle-pass", logo:<FiStar strokeWidth={1} size={25} />},
            { name: "Redeem", to: "/redeem", logo:<FiKey strokeWidth={1} size={25} />},
          ].map((entry, i) => (
            <Link to={entry.to} key={i} className="hover:opacity-70 px-4 py-2">
              <div className="flex flex-row">
                <div className="pr-4">
                  {entry.logo}
                </div>
                {entry.name}
              </div>
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
