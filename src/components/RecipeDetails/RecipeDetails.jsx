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
        chefName, yearsOfExperience, numberOfRecipes, likes, bio, recipeTitle, chefPicture, ingredients,
    } = data

    const handleFavourite = (event) => {
        setSelected(event.target)
        toast('Add To Favourite')
    }

    console.log(data.ingredients);
    useEffect(() => {
        fetch(`http://localhost:5000/recipe`)
            .then(res => res.json())
            .then(data => {
                const unique = data.find(match => match.id == id)
                setData(unique)
                // setRecipe(unique.recipes)
            })
    }, [])


    // console.log(data);
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
                <h2 className="card-title">{recipeTitle}</h2>

                {
                    ingredients && ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                }

            </div>
            <div><button disabled={selected} onClick={handleFavourite} class="btn btn-primary">Favourite</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default RecipeDetails;