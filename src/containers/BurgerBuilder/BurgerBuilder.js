import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICES_OF_INGREDIENTS = {
    salad: 0.2,
    bacon: 0.5,
    meat: 2,
    cheese: 0.7,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        },
        priceOfBurger: 4,
    }


    addIngredientHandler = (type) => {

        let count = this.state.ingredients[type];
        count +=1;
        
        let dupObject = {...this.state.ingredients};
        dupObject[type] = count;

        //console.log(type);

        this.setState( (prevState, prevProps) =>{
            return {
                ingredients: dupObject,

                priceOfBurger: prevState.priceOfBurger + PRICES_OF_INGREDIENTS[type],
            }

        })

        //console.log(this.state.ingredients);
    }

    deleteIngredientHandler = (type) => {

        let count  = this.state.ingredients[type];
        
        if (count !== 0){
            count-=1;

            let dupObject = {...this.state.ingredients};
            
            dupObject[type] = count;

            this.setState( (prevState, prevProps) => {
                return {
                    ingredients: dupObject,
                    priceOfBurger: prevState.priceOfBurger - PRICES_OF_INGREDIENTS[type],
                }
            })
        }

        
        

    }



    
    render() {

        //console.log('the state: ', this.state)

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                
                <BuildControls addIngredientHandler={ this.addIngredientHandler } 
                deleteIngredientHandler={ this.deleteIngredientHandler }
                ingredients={Object.entries( this.state.ingredients )}
                priceOfBurger={this.state.priceOfBurger}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;