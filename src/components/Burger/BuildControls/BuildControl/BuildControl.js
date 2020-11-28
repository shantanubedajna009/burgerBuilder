import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.More}>More</div>
            <div className={classes.Less}>Less</div>
        </div>
    )

}