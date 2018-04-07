import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';//./.

//we cannot use map on object only on array
const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey] )].map(( _, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        });//will give array of 3 undefiend spaces
    }); //will give an array
  return (
       <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>

  );

};

export default Burger;
