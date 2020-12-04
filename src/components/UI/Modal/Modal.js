
import React, {Component as cp, PureComponent as pp} from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const modal = (props) => {

    return (
        <Aux>
            <Backdrop />

            <div className={classes.Modal}
            style={{
                transform:  props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : 0
            }}>
                {props.children}
            </div>
        
        </Aux>
    )
} 

export default modal;