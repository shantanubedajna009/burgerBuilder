import React from 'react';
import Aux from '../../hoc/Aux';
import Burgeringredient from './Burgeringredient/Burgeringredient';
import classes from './Burger.css';


const burger = (props) => {


    let transformeedIngredients = Object.keys( props.ingredients ).map( (ingredientItself, index) => {
        // have to return something inside map's anon function
                                                                // here "_" just means not expectinga object
                                                                // just blank in place of object
        return [...Array( props.ingredients[ ingredientItself ] )].map( (_, i) => {
            return (
                // this array index "i" doesnt mean the order of the ingredient
                // it is nothing fancy it just means just the index number of the array
                // irrespective of the ingredient
                <Burgeringredient key={ingredientItself + i} type={ingredientItself} />
            )
        })
    })



    transformeedIngredients = Object.keys( props.ingredients ).map((ingredientItself, index) => {
        let mainList = []
        let j = 0;
        for (let i = 0; i < props.ingredients[ingredientItself]; i++ ){
            
            mainList.push(
                <Burgeringredient key={ingredientItself + j} type={ingredientItself} />
            )

            j++;
        }

        return mainList;

    })

    transformeedIngredients = []

    for(const [key, value] of Object.entries(props.ingredients)){    

        for (let i = 0; i < value; i++){
            transformeedIngredients.push(
                <Burgeringredient key={key + i} type={key} />
            );
        }


    }


    

    return (
        <div className={classes.Burger}>
            

             <Burgeringredient type='bread-top' />
            
             {transformeedIngredients}
            
            
            {/* <Burgeringredient type='meat' />
            <Burgeringredient type='cheese' /> */}
            <Burgeringredient type='bread-bottom' /> 
        </div>
    )
}


export default burger;