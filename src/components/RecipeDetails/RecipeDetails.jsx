import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'


const RecipeDetails = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/recipe`)
            .then(res => res.json())
            .then(data => {
                const unique = data.find(match => match.id == id)
                setData(unique)
            })
    }, [])
    // chefName, yearsOfExperience, numberOfRecipes, likes, bio,recipe,chefPicture
    console.log(data);
    return (
        <div className='px-10'>
            <div className='flex items-center justify-around '>
                <img className='h-96 w-96 object-cover' src={data.chefPicture} alt="" />
                <div className='px-40'>
                    <div>
                        <p>{data.chefName}</p>
                        <p className=''>{data.bio}</p>
                    </div>
                    <div className='flex items-center'>
                        <HandThumbUpIcon className='fill-blue-700 w-8 mr-1'></HandThumbUpIcon>
                        <p className='font-semibold text-xl'>Likes: {data.likes}</p>
                        <p className='font-semibold text-xl'>Recipes: {data.numberOfRecipes} Item</p>
                        <p className='font-semibold text-xl'>Experience: {data.yearsOfExperience} year<sup>+</sup> </p>
                    </div>
                </div>
            </div>
        </div>
        // <div className='px-4 md:px-24 lg:px-8 grid grid-cols-1 md:grid-cols-2'>
        //     <div>
        //         <img className='w-96 h-96 object-cover rounded' src={data.chefPicture} alt="" />
        //     </div>
        //     <div>
        //         <h1>{data.chefName}</h1>
        //         <p>{data.bio}</p>
        //         <div className='flex items-center justify-around'>
        //             <div className='flex items-center'>
        //                 <img className='w-16 rounded-full' src={experience} alt="" />
        //                 <p className='text-2xl'>Experience {data.yearsOfExperience} years</p>
        //             </div>
        //             <div className='flex items-center'>
        //                 <HandThumbUpIcon className='w-16 rounded-full fill-blue-700'></HandThumbUpIcon>
        //                 <p>Total Likes: {data.likes}</p>
        //             </div>
        //             <p>Number of Recipe: {data.numberOfRecipes}</p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default RecipeDetails;