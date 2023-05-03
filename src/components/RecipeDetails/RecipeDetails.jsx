import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ViewRecipe from '../ViewRecipe/ViewRecipe';

const RecipeDetails = () => {
    const [data, setData] = useState([])
    const recipeDetails = useLoaderData()
    const { id } = useParams()

    useEffect(() => {
        if (recipeDetails) {
            const clickChef = recipeDetails.find(match => match.id == id)
            setData(clickChef)
        }

    }, [])
    console.log(data);
    return (
        <div>
            {
                recipeDetails.map(details => <ViewRecipe
                    key={details.id}
                    details={details}
                ></ViewRecipe>)
            }
        </div>
    );
};

export default RecipeDetails;