import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state:AppRootStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component:any) => {

    class ComponentContainer extends React.Component<any, any>{
        render(){
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    const ConnectedComponentContainer = connect(mapStateToProps)(ComponentContainer)
    return ConnectedComponentContainer;
}
