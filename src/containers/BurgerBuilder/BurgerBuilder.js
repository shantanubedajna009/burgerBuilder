import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
//import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

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
        isPurchaseAble: false,
        showOrderSummary: false,
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

        this.changePurchasable(dupObject);
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

            this.changePurchasable(dupObject);
        }

    }

    changePurchasable = (ingredients) => {

        let sum=0;
        for (const [key, value] of Object.entries(ingredients)){
            sum+=value;
        }


        if (sum === 0){
            this.setState({
                isPurchaseAble: false
            })
        }else{
            this.setState({
                isPurchaseAble: true
            })
        }

    }


    showOrderSummaryhandler = () => {
        //console.log('dude im clicked');
        this.setState({showOrderSummary: true})
    }



    
    render() {

        //console.log('the state: ', this.state)

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />

                <Modal show={this.state.showOrderSummary}>
                    <OrderSummary ingredients={ Object.entries( this.state.ingredients ) } />
                </Modal>
                
                <Buildcontrols addIngredientHandler={ this.addIngredientHandler } 
                    deleteIngredientHandler={ this.deleteIngredientHandler }
                    ingredients={Object.entries( this.state.ingredients )}
                    priceOfBurger={this.state.priceOfBurger}
                    isPurchaseAble={this.state.isPurchaseAble}
                    showOrderSummaryhandler={this.showOrderSummaryhandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;