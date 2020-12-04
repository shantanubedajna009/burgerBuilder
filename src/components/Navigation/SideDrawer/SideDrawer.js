import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    
    let openOrCloseClass = null;

    if (props.show){
        openOrCloseClass = classes.Open;
    }
    else{
        openOrCloseClass = classes.Close;
    }

    return(
        <Aux>
            <Backdrop />

            <div className={classes.SideDrawer + ' ' + openOrCloseClass }>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}


export default sideDrawer;