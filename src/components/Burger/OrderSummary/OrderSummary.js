import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import { v4 as uuidv4 } from 'uuid';


const orderSummary = (props) => {

    //console.log('ordersummary ingredients', props.ingredients);

     let listItems = []
    for (const [key, value] of props.ingredients){
        listItems.push(
            <li key={uuidv4()}><span style={ {textTransform: 'capitalize'} }>{key}</span>: {value}</li>         
        )
    }

    return(
        <Aux>
            <h1>Order Summary</h1>
            <p>Your burger has follwing ingredients</p>
            <ul>
                {listItems}
            </ul>
            <p><strong>Total Price {props.priceOfBurger.toFixed(2)}</strong></p>

            <Button btnType="Danger" clickHandler={props.cancelHandler}>
                Cancel
            </Button>

            <Button btnType="Success" clickHandler={props.successHandler}>
                Continue
            </Button>
        </Aux>
    );


}

export default orderSummary;