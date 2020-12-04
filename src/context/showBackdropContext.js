import React from 'react';


const showBackdropContext = React.createContext({
    
    showBackdrop: false,
    showContextHandler: () => {}
})

export default showBackdropContext;