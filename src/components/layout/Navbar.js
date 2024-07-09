import React from "react";
import { signIn } from "../../assets/index";
import { navLink } from "../../utils/constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Logo</div>
        <div>
          <ul className="flex gap-5 items-center">
            {Object.keys(navLink).map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  className="text-white text-lg hover:text-gray-200 transition duration-300"
                >
                  {navLink[item]}
                </Link>
              </li>
            ))}
            <li>
              <Link to={"/login"}>
                <img src={signIn} className="w-8 h-8 cursor-pointer" alt="login" />

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
