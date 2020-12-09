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
    captcha?: null | string
}
type Props = {
    captcha?: null | string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType,Props> & Props> = (props) => {
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
        {props.captcha && <img src={props.captcha} alt="Captcha"/>}
        {props.captcha &&  <Field type="text" placeholder={'Captcha'} component={Input} name='captcha' validate={[required]}/>}
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

const LoginReduxForm = reduxForm<FormDataType , Props>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean,captcha: null | string) => void
    isAuth: boolean
    captcha: null | string
}

const Login = (props: LoginPropsType) => {

    const submit = (values: FormDataType) => {
        props.login(values.login, values.password, values.checkbox,values.captcha as string )
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={submit} captcha={props.captcha}/>
    </div>
}


type MapStateToPropsType = {
    isAuth: boolean
    captcha: null | string
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean,captcha: null | string) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {login})(Login)
