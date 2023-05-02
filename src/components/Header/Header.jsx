import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-20 py-5 bg-pink-200">
        <h3 className="text-2xl font-bold"><i>Recipes<span className="text-pink-400">Corner</span>
        </i></h3>
        <div>
            <Link className="font-semibold hover:bg-pink-300 hover:delay-150 hover:transition px-4 py-2 rounded" to="/">Home</Link>
            <Link className="font-semibold hover:bg-pink-300 hover:delay-150 hover:transition px-4 py-2 rounded" to="/blog">Blog</Link>
            <Link to="/login"><button className="bg-pink-400 rounded px-5 py-1 text-white font-semibold ms-10">
                Login
            </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
