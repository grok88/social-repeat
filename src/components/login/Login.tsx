import React from 'react'
import {connect} from 'react-redux';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {required} from '../../utils/validator/validator';
import {Input} from "../common/formsControls/formsControls";
import {login} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom';
import styles from './../common/formsControls/formsControls.module.css'

type FormDataType = {
    login: string
    password: string
    checkbox: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'Login'} component={Input} name='login' validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} name='password' validate={[required]} type={'password'}/>
        </div>
        <div>
            <Field component={Input} name='checkbox' type={'checkbox'}/>
        </div>
        <div>
            {
                props.error && <div className={styles.commonFieldError}>
                    {
                        props.error
                    }
                </div>
            }
        </div>
        <div>
            <button type={'submit'}>Send</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const submit = (values: FormDataType) => {
        props.login(values.login, values.password, values.checkbox)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={submit}/>
    </div>
}


type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {login})(Login)
