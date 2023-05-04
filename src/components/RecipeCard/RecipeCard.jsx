import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const { recipeName, ingredients, cookingMethod, rating, foodImage } = recipe;
  const [disable,setDisable] = useState(false)

  const notify = () => toast.success('Recipe Added to Favourite', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const handleFavourite = () => {
      setDisable(true)
      notify()
    }

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
            <div className="flex gap-2">
            <Rating
             placeholderRating={rating}
             readonly
             emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
             placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
             fullSymbol={<FaStar></FaStar>}
             ></Rating>
            <p className="text-slate-600 font-semibold">
               {rating}</p>
            </div>
            <div>
            <button onClick={handleFavourite} className={disable? "invisible" : "visible"}><FaHeart size={'25px'} className="text-sky-400
             hover:text-sky-700 hover:scale-125"></FaHeart>
            </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default RecipeCard;
