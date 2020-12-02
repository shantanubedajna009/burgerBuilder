import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {

    return (
        <ul className={classes.NavigationItems}>
            
            {/* if its a boolean field the dont need to set it explicitly, 
            just defining a props becomes a boolean true by default like this "active" */}
            <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
            <NavigationItem link={'/'}>Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;