import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {required} from '../../utils/validator/validator';
import {Input} from "../common/formsControls/formsControls";

type FormDataType = {
    login: string
    password: string
    checkbox: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'Login'} component={Input} name='login' validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} name='password' validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name='checkbox' type={'checkbox'}/>
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

export const Login = () => {
    const submit = (values: FormDataType) => {
        console.log(values);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={submit}/>
    </div>
}
