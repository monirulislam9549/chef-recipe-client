import React from 'react';
import { Link } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

const ChefCard = ({ chef }) => {

    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-lg gap-4">
                <figure><img className='w-full h-96' src={chefPicture} alt="" /></figure>
                <div className='flex justify-around'>
                    <div className='flex items-center'>
                        <HandThumbUpIcon className='fill-blue-700 w-8 mr-1'></HandThumbUpIcon>
                        <p className='font-semibold text-xl'>Likes: {likes}</p>
                    </div>
                    <p className='font-semibold text-xl'>Recipes: {numberOfRecipes} Item</p>
                    <p className='font-semibold text-xl'>Experience: {yearsOfExperience} year<sup>+</sup> </p>
                </div>
                <p className='text-center text-2xl font-bold'>{chefName}</p>
                <div className="card-body">
                    {/* <h2 className="card-title"></h2> */}
                    <div className="card-actions justify-center">
                        <Link to={`/recipe/${id}`}>
                            <button className="btn btn-primary">View Recipes </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;