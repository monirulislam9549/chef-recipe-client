import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chefs = () => {
    const [chefs, setChefs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = ` https://chef-recipe-hunting-server-monirulislam9549.vercel.app/recipe`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setChefs(data)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        <div className='px-4 md:px-24 lg:px-8'>
            <h1 className='text-center font-bold my-10 text-blue-700 text-5xl my-12'>Choice Your Chef</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    chefs?.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chefs;