import React, { useEffect, useState } from 'react';
import Cart from '../Select/Select';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [select, setSelected] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const handleSelect = (meal) => {
        const newSelect = [...select, meal]
        setSelected(newSelect)
    }
    return (
        <div>
            <div>
                <div className="search-field">
                    <input className="search" type="text" placeholder="Search Your Food" />
                </div>
                <div className="d-flex">
                    <div className="container w-75 ms-5 mt-4">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {
                                meals.map(meal => <Meal
                                    key={meal.idMeal}
                                    meal={meal}
                                    handleSelect={handleSelect}
                                />)
                            }
                        </div>
                    </div>
                    <div className="cart-align">
                        <Cart select={select} />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Meals;