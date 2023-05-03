import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefsData = () => {
  const chefsInfo = useLoaderData();
  const {chefName, chefPicture, likes, numRecipes, yearsExperience,shortBio} = chefsInfo
  return (
    <div>
      <div className="bg-cover h-2/3 bg-gradient-to-r from-sky-800 via-sky-600 to-blue-500 ">
        <div className="flex">
        <div className="w-2/5 p-5 mt-10 ms-10">
            <img className=" h-auto rounded-lg" src={chefPicture} alt="" />
        </div>
        <div>
            <h2 className="text-4xl font-bold text-white mt-20 ms-2">{chefName}</h2>
            <p className="text-md font-semibold text-slate-300 ms-2 mt-2 w-96">{shortBio}</p>
            <div className="ms-2 mt-5 ">
            <p className="font-serif text-slate-300 mt-2">Experience: {yearsExperience}yrs</p>
            <p className="font-serif text-slate-300 mt-2">Recipes: {numRecipes}</p>
            <p className="font-serif text-slate-300 mt-2 flex">Likes: {likes}<FaThumbsUp className="ms-1 mt-1 text-slate-100"></FaThumbsUp></p>
            </div>
        </div>
        </div>
      </div>
      <h2 className="text-4xl text-center text-black font-bold mt-10 mb-2">Chef Recipes</h2>
      <p className="text-center text-md font-semibold text-slate-600 mb-16">Here You Can Find Some Best Recipes From Our Chef !!!</p>
    </div>
  );
};

export default ChefsData;
