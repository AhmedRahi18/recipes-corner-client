import React, { useContext, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ChefsCard = ({ chef }) => {
  const { chefName, chefPicture, id, likes, numRecipes, yearsExperience } = chef
  const {loading} = useContext(AuthContext)
  if(loading){
    return <div className='text-center mt-52'>
    <ClipLoader
    loading={loading}
    size={100}/>
    </div>
  }

  return (
    <div>
      <div className="card w-96 bg-gradient-to-r from-sky-100 to-blue-200 shadow-lg">  
          <LazyLoadImage
          delayTime={3000}
          loading="lazy"
          src={chefPicture}
          >
          </LazyLoadImage>
        <div className="card-body">
          <h2 className="text-xl font-extrabold">{chefName}</h2>
          <div className="">
            <p className="font-serif text-slate-600 me-1">Experience: {yearsExperience}yrs</p>
            <p className="font-serif text-slate-600 me-2">Recipes:{numRecipes}</p>
            <p className="font-serif text-slate-600 flex">Likes:{likes}<FaThumbsUp className="ms-1 mt-1 text-slate-500"></FaThumbsUp></p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chefsData/${id}`}><button className="btn border-none bg-gradient-to-r from-sky-400 to-blue-500 rounded px-5 py-1 text-white font-bold
             mt-2 ms-20 hover:bg-sky-600 hover:scale-90">View Recipes</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
