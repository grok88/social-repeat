import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type FormDataType = {
    login: string
    password: string
    checkbox: string
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field type="text" placeholder={'Login'} component={'input'} name='login'/>
        </div>
        <div>
            <Field placeholder={'Password'} component={'input'} name='password'/>
        </div>
        <div>
            <Field component={'input'} name='checkbox' type={'checkbox'}/>
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
