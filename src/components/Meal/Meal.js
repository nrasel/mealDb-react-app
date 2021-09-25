import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = (props) => {

    const { strMeal, strMealThumb, strInstructions } = props.meal

    return (
        <div >
            <div class="col">
                <div class="card h-100">
                    <img src={strMealThumb} class="card-img-top meal-img" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{strMeal}</h5>
                        <p class="card-text">{strInstructions.slice(0, 200)}</p>
                        <button onClick={() => props.handleSelect(props.meal)} className="btn btn-primary"><FontAwesomeIcon icon={faCheck} /> Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;