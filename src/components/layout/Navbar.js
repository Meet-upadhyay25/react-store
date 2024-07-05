import React from "react";
import { signIn } from "../../assets/index";
import { navLink } from "../../utils/constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-lg flex justify-around p-5">
      <div>Logo</div>
      <div>
        <ul className="flex gap-5">
          {Object.keys(navLink).map((item) => (
            <li key={item}>
              <Link to={item}>{navLink[item]}</Link>
            </li>
          ))}
          <li>
            <img src={signIn} className="w-5" alt="login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
