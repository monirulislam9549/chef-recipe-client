import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = () => {
    const [data, setData] = useState({})
    // const [recipe, setRecipe] = useState([])
    const [selected, setSelected] = useState(false)
    const { id } = useParams()
    const {
        chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipeTitle, chefPicture, ingredients, recipes
    } = data

    const handleFavourite = (event) => {
        setSelected(event.target)
        toast('Add To Favourite')
    }
    // console.log(data.recipes[1].recipeTitle);
    // console.log(data.recipes[0].recipeTitle);
    useEffect(() => {
        fetch(` https://chef-recipe-hunting-server-monirulislam9549.vercel.app/recipe`)
            .then(res => res.json())
            .then(data => {
                const unique = data.find(match => match.id == id)
                setData(unique)
                // setRecipe(unique.recipes)
            })
    }, [])



    return (
        <div className="bg-base-100 shadow-xl px-10">
            <div>
                <img className='w-80' src={chefPicture} alt="Album" />
                <div className=''>
                    <p>{chefName}</p>
                    <p>{bio}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <HandThumbUpIcon className='fill-blue-700 w-8 mr-1'></HandThumbUpIcon>
                <p className='font-semibold text-xl'>Likes: {likes}</p>
            </div>
            <p className='font-semibold text-xl'>Recipes: {numberOfRecipes} Item</p>
            <p className='font-semibold text-xl'>Experience: {yearsOfExperience} year<sup>+</sup> </p>
            <div className="card-body">
                {recipes &&
                    recipes.map(recipe => (
                        <div key={recipe.recipeTitle}>
                            <h2>{recipe.recipeTitle}</h2>
                            <ul>
                                {recipe.ingredients.map(ingredient => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

                {/* {recipes &&
                    recipes.map(recipe => (
                        <div key={recipe.recipeTitle}>
                            <h1>{recipe.recipeTitle}</h1></div>

                    ))

                } */}
                {/* {
                    ingredients && ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                } */}

            </div>
            <div><button disabled={selected} onClick={handleFavourite} className="btn btn-primary">Favourite</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default RecipeDetails;