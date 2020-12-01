import React from 'react';
import classes from './Button.css';


const button = (props) => {

    //cant use normal string classname alngside css modules
    //let classNameHere = [ classes.Button, props.btnType ].join(' ') cant do this
    //have to do this let classNameHere = [ classes.Button, classes[props.btnType] ].join(' ')

    let classNameHere = [ classes.Button, classes[props.btnType] ].join(' ')
    //console.log(classNameHere);

    return (
        <button onClick={props.clickHandler} className={classNameHere}>{props.children}</button>
    )

}

export default button;