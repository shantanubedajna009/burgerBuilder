import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import ShowBackdropContext from '../../context/showBackdropContext';

class Layout extends Component {

    state = {
        showBackdropSidebar: false
    }


    // hideBackdropSideBar = () => {
    //     this.setState({
    //         showBackdropSidebar: false
    //     })
    // }

    // openBakdropSideBar = () => {
    //     this.setState({
    //         showBackdropSidebar: true
    //     })
    // }

    toggleBackdropSideBar = () => {
        this.setState({
            showBackdropSidebar: !this.state.showBackdropSidebar
        })
    }


    render(){
        return (
            <Aux>
                <Toolbar openSidebar={this.toggleBackdropSideBar} />

                <ShowBackdropContext.Provider value={ 
                    {
                        showBackdrop: this.state.showBackdropSidebar,
                        showContextHandler: this.toggleBackdropSideBar
                    }
                 }>     

                    <SideDrawer show={this.state.showBackdropSidebar} />

                </ShowBackdropContext.Provider>  
    
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        )
    }

}

export default Layout;