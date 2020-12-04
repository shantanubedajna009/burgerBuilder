import React, { useContext } from 'react';
import classes from './Backdrop.css';
import ShowBackdropContext from '../../../context/showBackdropContext';


const backdrop = (props) => {

    let cntxt = useContext(ShowBackdropContext);
    //console.log('cntxt.showContextHandler: ', cntxt.showContextHandler);

    return (

        // if js code is outside jsx and not wrapped in 
        // any jsx then it doesnt require to be inside curly braces {}
        // ans as you can see coments can be written like this also //
        cntxt.showBackdrop ?
        <div className={classes.Backdrop} onClick={cntxt.showContextHandler}>
            
        </div>
        : null 

        )


}

export default backdrop;