import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  
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
        <h3 className="text-3xl font-bold"><i>Recipes<span className="text-sky-400">Corner</span>
        </i></h3>
        <div className="flex flex-col md:flex-row">
            <NavLink className={({isActive}) => isActive ? "font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform bg-sky-300 w-20": 'w-20 font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform'} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform bg-sky-300 w-20": ' w-20 font-semibold hover:bg-sky-300 hover:delay-150 hover:transition px-4 py-2 rounded transition-colors duration-300 transform'} to="/blog">Blog</NavLink>
            {user? (<div className="flex">
              {user.photoURL&&<img title={user?.displayName} className="w-10 rounded-full" src={user?.photoURL} alt="" />}
              <button onClick={handleLogOut} className="px-5 py-1 font-semibold bg-sky-500 text-white rounded ms-2">Logout</button>
            </div>
            ) : (
              <NavLink className={({isActive})=> isActive ? "px-6 py-2 scale-110 font-semibold bg-sky-500 text-white rounded w-24" : "px-6 py-2 w-24 font-semibold bg-sky-500 text-white rounded " } to="/login"><button >Login</button></NavLink>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;