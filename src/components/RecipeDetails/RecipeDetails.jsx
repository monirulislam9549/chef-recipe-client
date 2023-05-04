import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'


const RecipeDetails = () => {
    const [data, setData] = useState({})
    const [recipe, setRecipe] = useState([])
    const { id } = useParams()
    const {
        chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipeTitle, chefPicture, ingredients,
    } = data
    console.log(data.ingredients);
    useEffect(() => {
        fetch(`http://localhost:5000/recipe`)
            .then(res => res.json())
            .then(data => {
                const unique = data.find(match => match.id == id)
                setData(unique)
                setRecipe(unique.recipes)
            })
    }, [])


    // console.log(data);
    return (
        <div className="bg-base-100 shadow-xl">
            <div>
                <figure><img className='w-80' src={chefPicture} alt="Album" /></figure>
                <div className=''>
                    <p>{chefName}</p>
                    <p>{bio}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{recipeTitle}</h2>

                {
                    recipe && recipe.map((r, index) => (
                        <li key={index}>{r}</li>
                    ))
                }

                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Listen</button> */}
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;