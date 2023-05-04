import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating, foodImage } = recipe;
  return (
    <div>
      <div className="card w-3/4 ms-20 card-side bg-sky-100 shadow-lg">
          <img
          className=" rounded w-72 h-80"
            src={foodImage}
            alt=""/>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{recipeName}</h2>
          <p className="font-semibold text-slate-600">Ingredients: {ingredients}</p>
          <p className="font-semibold text-slate-600">Cooking Method: {cookingMethod}</p>
          <div className="flex justify-between">
            <div>
            <p>{rating}</p>
            </div>
            <div>
            <button className=""><FaHeart size={'25px'} className="text-sky-400
             hover:text-sky-700 hover:scale-125"></FaHeart>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
