import React from "react";
import { FaCheck } from "react-icons/fa";

const FoodCollection = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold mt-10">Best Collection Recipes</h2>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:justify-between sm:items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The Ultimate Recipe and Chefs Collection
              </h2>
              <p className="mt-6 text-gray-500 sm:mt-0 sm:text-xl">
                Discover hundreds of delicious and easy-to-make recipes from
                around the India.
              </p>
              <div className="mt-8 flex justify-center sm:justify-start">
                <div>
                  <button className="bg-sky-400 rounded px-8 py-2 text-white font-serif mb-5
                  mt-2 ">
                    More Recipes
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-0 sm:ml-10">
              <div className="bg-skyblue-500 rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-5 sm:p-6 bg-sky-100">
                  <h3 className="text-lg font-medium text-black mb-4">
                    Why Choose Our Recipes?
                  </h3>
                  <ul className="text-black">
                    <li className="flex items-start">
                      <span className="inline-block mr-2 mt-1">
                        <FaCheck className="text-success" />
                      </span>
                      <span>Quick and easy to make</span>
                    </li>
                    <li className="flex items-start mt-4">
                      <span className="inline-block mr-2 mt-1">
                        <FaCheck className="text-success" />
                      </span>
                      <span>Uses fresh, high-quality ingredients</span>
                    </li>
                    <li className="flex items-start mt-4">
                      <span className="inline-block mr-2 mt-1">
                        <FaCheck className="text-success" />
                      </span>
                      <span>Recommended from best chefs</span>
                    </li>
                    <li className="flex items-start mt-4">
                      <span className="inline-block mr-2 mt-1">
                        <FaCheck className="text-success" />
                      </span>
                      <span>
                        Expert tips and tricks for perfect results every time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodCollection;
