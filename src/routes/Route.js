import {Route, Redirect} from 'react-router-dom';
import React from 'react';

export default function RouteWrapper({
component : Component,
isPrivate,
...rest
}) {

const signed = true;



if(!signed && isPrivate){
    return <Redirect to='/login' />
}


else{
    <Route {...rest}
    render={props => (
        <Component {...props} />
    )}
    />
}

    return(
        <Route {...rest}
        render={props => (
            <Component {...props} />
        )}
        />
    )
}
 
