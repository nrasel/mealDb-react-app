import React from 'react';

const Select = (props) => {
    let mealName;
    for(const meal of props.select){
         mealName=meal.strMeal
    }
    return (
        <div className="mt-5">
           <h1>{mealName}</h1>
        </div>
    );
};

export default Select;