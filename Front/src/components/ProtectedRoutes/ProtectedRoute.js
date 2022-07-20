import React, { useEffect } from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom'

const ProtectedRoute = ({isAuth,Comp,oldPath,data,serverUrl, ...rest }) => {
    let history = useHistory()

    
    return (
        <Route
        {...rest} 
        render={(props) =>{
            if(isAuth){
                return <Comp oldPath={oldPath} data={data} serverUrl={serverUrl} />
            }else{
                history.push(oldPath)
            }
        }}
        />
    );
};

export default ProtectedRoute;