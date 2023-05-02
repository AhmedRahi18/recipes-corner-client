import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const photo = user.photoURL;
  console.log(photo)
  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <div className="md:flex md:justify-between ps-5 md:px-20 py-5 bg-sky-200">
        <h3 className="text-2xl font-bold"><i>Recipes<span className="text-sky-400">Corner</span>
        </i></h3>
        <div className="flex flex-col md:flex-row">
            <Link className="font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform" to="/">Home</Link>
            <Link className="font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform" to="/blog">Blog</Link>
            {photo?(
              <img className="w-20" src={photo} alt="" />
            ) : (
              <FaUserCircle className="text-white" style={{fontSize: "2.3rem"}}></FaUserCircle>
            )
          }
            {user? (
              <button onClick={handleLogOut} className="px-5 py-1 font-semibold bg-sky-500 text-white rounded ms-2">Logout</button>
            ) : (
              <Link to="/login"><button className="px-5 py-2 font-semibold bg-sky-500 text-white rounded ">Login</button></Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;