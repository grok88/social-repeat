import React, {Suspense} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Preloader} from "../common/preloader/Preloader";



export const withSuspense = (Component:React.ComponentType) => {
    return (props:any) => {
       return  <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}
