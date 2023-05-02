import React from 'react';
import './Home.css'
import chef from '../../../image/Lovepik_com-833581938-Cartoon cute chef cartoon character holding shovel.png'

const Home = () => {
    return (
        <div className='bg-sky-100'>
            <div id='home' className='md:flex'>
            <div>
            <h1 className='font-serif text-5xl md:text-7xl md:ms-20 pt-20'>Recipes <br /> Corner </h1>
            <p className='w-3/4 md:ms-20 text-slate-200'>Our recipe website is a great resource for professional chefs who are looking for inspiration and new ideas to incorporate into their menus. Our community of passionate food bloggers and chefs contribute their unique and creative recipes, making our website a hub of culinary creativity and innovation. Whether you're a home cook or a professional chef, our website offers something for everyone, from classic comfort foods to cutting-edge culinary trends. </p> 
            <button className="bg-sky-400 rounded px-5 py-1 text-white font-serif mb-5
             mt-2 ms-20"> Read More</button>
            </div>
            <div>
            <img className='invisible md:visible w-48 md:w-4/5' src={chef}/>
            </div>
            </div>

        </div>
        
    );
};

export default Home;