import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="md:flex md:justify-between ps-5 md:px-20 py-5 bg-sky-200">
        <h3 className="text-2xl font-bold"><i>Recipes<span className="text-sky-400">Corner</span>
        </i></h3>
        <div className="flex flex-col md:flex-row">
            <Link className="font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform" to="/">Home</Link>
            <Link className="font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform" to="/blog">Blog</Link>
            <Link to="/login"><button className="bg-sky-400 rounded px-5 py-1 text-white font-semibold md:ms-10">
                Login
            </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
