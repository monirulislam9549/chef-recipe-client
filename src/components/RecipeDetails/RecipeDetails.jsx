import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const RecipeDetails = () => {
    const [data, setData] = useState({})
    const [rating, setRating] = useState(0)
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
        <div className="bg-base-100 px-10 mt-5">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <img className='rounded' src={chefPicture} alt="Album" />
                </div>
                <div className=''>
                    <p className='font-bold text-xl'>{chefName}</p>
                    <p>{bio}</p>
                </div>
            </div>
            <div className='flex items-center gap-x-10 mt-4'>
                <div className='flex items-center'><HandThumbUpIcon className='fill-blue-700 w-8 mr-1'></HandThumbUpIcon>
                    <p className='font-semibold text-xl'>Likes: {likes}</p></div>
                <p className='font-semibold text-xl'>Recipes: {numberOfRecipes} Item</p>
                <p className='font-semibold text-xl'>Experience: {yearsOfExperience} year<sup>+</sup> </p>
                <Rating style={{ maxWidth: 150 }} value={rating} onChange={setRating} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
                {recipes &&
                    recipes.map(recipe => (
                        <div className='bg-slate-300 p-5 rounded-md' key={recipe.recipeTitle}>
                            <h2 className='font-bold text-2xl mb-4'>{recipe.recipeTitle}</h2>
                            <div>
                                {recipe.ingredients.map(ingredient => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-center my-5'><button disabled={selected} onClick={handleFavourite} className="btn btn-primary">Add to Favourite</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default RecipeDetails;