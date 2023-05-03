import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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

    console.log(data);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-80 object-cover' src={data.chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeDetails;