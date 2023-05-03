import React from 'react';
// import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl gap-4">
                <figure><img className='w-full h-96' src={chefPicture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/${recipe.id}`}>
                        </Link> */}
                        <button className="btn btn-primary">View Recipe Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;