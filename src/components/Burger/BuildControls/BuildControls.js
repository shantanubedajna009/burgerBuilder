import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import { v4 as uuidv4 } from 'uuid';


const buildControls = (props) => {


    //console.log('addIngredientHandler: ', props.addIngredientHandler);
    

    let buildControlList = props.ingredients.map( (ingredient, index) => {

        // hetting forst letter in the string making it upercase.... with the slice selecting the string from 1st position
                                                                    // excluding the first character 
        return <BuildControl 

                disabled={ingredient[1] === 0}
                
                addIngredientHandler={ () => {
                    //console.log('added: ', ingredient[0]); 
                    
                    // return can be used or not used, not mandatory
                    //return props.addIngredientHandler(ingredient);
                    props.addIngredientHandler(ingredient[0])
                } } 

                deleteIngredientHandler={ () => {
                    //console.log('deleted', ingredient[0]); 
                    
                    // return can be used or not used, not mandatory
                    //return props.deleteIngredientHandler(ingredient);
                    props.deleteIngredientHandler(ingredient[0])
                } } 
                
                label={ingredient[0].charAt(0).toUpperCase() + ingredient[0].slice(1)}
                
                key={uuidv4()}
                />
    })

    return (
        <div className={classes.BuildControls}>
            <p><strong>{props.priceOfBurger.toFixed(2)}</strong></p>
            
            {buildControlList}
        </div>
    )
}


export default buildControls;