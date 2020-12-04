import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerTogglle';


const toolbar = (props) => {


    //console.log(props.openSidebar);

    return (
        <header className={classes.Toolbar}>
            
            {/* <DrawerToggle clicked={props.openSidebar}/>     */}

            <div onClick={props.openSidebar}>MENU</div>

            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );

}


export default toolbar;