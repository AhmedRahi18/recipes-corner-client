import React, { useEffect, useState } from 'react';
import './Home.css'
import chef from '../../../image/Lovepik_com-833581938-Cartoon cute chef cartoon character holding shovel.png'
import FoodCollection from '../FoodCollection/FoodCollection';
import GetFood from '../GetFood/GetFood';
import ChefsCard from '../ChefsCard/ChefsCard';

const Home = () => {
    const [chefs,setChefs] = useState([])

    useEffect(()=>{
        fetch('https://recipes-corner-server-ahmedrahi18.vercel.app/chefsData')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])

    return (
        <div className='bg-sky-50'>
            <div id='home' className='md:flex'>
            <div>
            <h1 className='font-serif text-5xl md:text-7xl md:ms-20 pt-20'>Recipes <br /> <span className='text-sky-500'>Corner</span> </h1>
            <p className='w-3/4 md:ms-20 text-slate-200'>Our recipe website is a great resource for professional chefs who are looking for inspiration and new ideas to incorporate into their menus. Our community of passionate food bloggers and chefs contribute their unique and creative recipes, making our website a hub of culinary creativity and innovation. Whether you're a home cook or a professional chef, our website offers something for everyone, from classic comfort foods to cutting-edge culinary trends.</p> 
            <button className="bg-gradient-to-r from-sky-400 to-blue-500 rounded px-5 py-1 text-white font-serif mb-5
             mt-2 ms-20"> Read More</button>
            </div>
            <div>
            <img className='invisible md:visible w-48 md:w-4/5' src={chef}/>
            </div>
            </div>
            <div>
            <GetFood></GetFood>
            </div>
            <div className='my-5'>
            <h2 className='text-center text-4xl md:text-5xl font-bold pt-10 pb-5'>Our Best Chefs and Recipes</h2>
            <p className='text-center text-semibold text-slate-600 md:mx-40 mb-16'> The most acclaimed Indian chefs and their mouth-watering recipes.From traditional dishes to modern creations, these chefs have earned international recognition for their culinary skills and ability to blend traditional Indian flavors with techniques.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-10'>
                {
                    chefs.map(chef=><ChefsCard
                    key={chef.id}
                    chef={chef}
                    ></ChefsCard>)
                }
            </div>
            </div>
            <FoodCollection></FoodCollection>
        </div>
        
    );
};

export default Home;