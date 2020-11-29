import React, { useContext } from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => {

    //console.log('disabled state: ', props.disabled);

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            
            <button className={classes.More}
                 onClick={props.addIngredientHandler}>
            
                More
            
            </button> 
            
            <button className={classes.Less}
            disabled={props.disabled}
            onClick={props.deleteIngredientHandler}>
                Less
            
            </button>
        </div>
    )

}


export default buildControl;