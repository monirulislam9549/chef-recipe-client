import React from 'react';

const ChefCard = ({ chef }) => {
    console.log(chef);
    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;