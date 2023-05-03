import React from 'react';

const GetFood = () => {
    return (
        <div className=' bg-sky-50 pb-5 px-5'>
            <div className='flex bg-slate-200 mt-10 p-6 md:p-2 rounded'>
                <div>
                <h2 className='text-4xl md:text-5xl font-bold text-black md:ms-48 '>Learn Delicious <br /> Recipes <span className='text-sky-400'> From Us.</span></h2>
                <img className='w-96 rounded md:ms-44 my-10' src="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1589353547/kunal-kapoor-1.jpg" alt="" />
                </div>
                <div>
                    <img className='w-72 rounded-md ms-5 md:ms-24 relative mt-5' src="https://masalaandchai.com/wp-content/uploads/2022/07/Indian-Kitchen-Tools-Guide.jpg" alt="" />
                    <h2 className='text-4xl md:text-5xl font-bold text-black ms-5 md:ms-24 py-3'>Best From <br /> <span className='text-slate-500'>Indian Chefs</span> </h2>
                </div>
            </div>
        </div>
    );
};

export default GetFood;