import React, { useEffect, useState } from 'react';
import Cart from '../Select/Select';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [select, setSelected] = useState([])
    const [desplayMeals, setDisplayMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setDisplayMeals(data.meals)
            })
    }, [])
    const handleSelect = (meal) => {
        const newSelect = [...select, meal]
        setSelected(newSelect)
    }
    const handlesearch = (event) => {
        const searchText = event.target.value
        const searchMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayMeals(searchMeals)
    }
    return (
        <div>
            <div>
                <div className="search-field">
                    <input onChange={handlesearch} className="search" type="text" placeholder="Search Your Food" />
                </div>
                <div className="d-flex">
                    <div className="container w-75 ms-5 mt-4">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {
                                desplayMeals.map(meal => <Meal
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