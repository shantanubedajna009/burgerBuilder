import React from 'react';
import Aux from '../../hoc/Aux';
import Burgeringredient from './Burgeringredient/Burgeringredient';
import classes from './Burger.css';


const burger = (props) => {

    // transformedIngredients is an Array of Arrays with the reduce
    // [ [Burgeringredient, Burgeringredient], [Burgeringredient], [Burgeringredient] ]
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
    
    .reduce( (newRootArray, transformeedIngredientsElement) => {

        //after returning this becomes the new newRootArray
        // this basically  takes all nested array inside transformedIngredients
        // and concats them in a new root array and makes that root array transformedIngredients
        
        return newRootArray.concat(transformeedIngredientsElement);  //concat is just pythoh List.extend()
    }, []) // [] is the new initial state for a new array



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

    // transformeedIngredients = []

    // for(const [key, value] of Object.entries(props.ingredients)){    

    //     for (let i = 0; i < value; i++){
    //         transformeedIngredients.push(
    //             <Burgeringredient key={key + i} type={key} />
    //         );
    //     }


    // }

    
    // we can work with jsx in any part of a class or a function
    // whereever we can write javascript code
    // as long as we have imported React
    if (transformeedIngredients.length === 0){
        transformeedIngredients = <p>Please Add Some Ingredients</p>
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