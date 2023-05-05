import React from 'react';
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='px-4 my-12'>
            <h1 className='my-20 text-5xl text-center font-bold text-blue-700'>Famous Recipes</h1>
            <Marquee>
                <div className='mx-2'>
                    <img className='w-full h-52 object-cover rounded ' src="https://i.ibb.co/41CYgp3/pexels-roman-odintsov-4553034.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Salad</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/TBSDLjW/pexels-roman-odintsov-4552127.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Juice with Bread</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/SfXxMJy/pexels-karolina-grabowska-4210847.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Potetos Crackers</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/YjHVFfx/pexels-karolina-grabowska-4202891.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Meat Recipe</h1>
                </div>
                <div className='mx-2'>
                    <img className='w-full h-52 object-cover rounded' src="https://i.ibb.co/HTMGGFx/pexels-jonathan-borba-2878743.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Chicken Tikka Masala</h1>
                </div>
            </Marquee>
            <br />
            <Marquee>

                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/Hrh7Kr0/pexels-mikhail-nilov-6740849.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Vegetable Burger</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/5Yw9D2g/diet-1-286x184.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Beef Fry</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/JKtdCrm/sandwitch-286x184.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Vegetable Stir Fry</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/cNmxFs4/charry-cake-1-286x184.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Sandwich</h1>
                </div>
                <div className='mx-2'>
                    <img className=' w-full h-52 object-cover rounded' src="https://i.ibb.co/r7VZW2h/monstruo-estudio-574-unsplash-286x184.jpg" alt="" />
                    <h1 className='text-center font-bold mt-4'>Garden Salad</h1>
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;