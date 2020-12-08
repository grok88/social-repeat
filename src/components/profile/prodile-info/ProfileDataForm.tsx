import {getProfileRespType} from "../../../api/api";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/formsControls/formsControls";
import {required} from "../../../utils/validator/validator";
import styles from "./ProfileInfo.module.css";

export type ProfileDataFormPropsType = {
    profile: getProfileRespType
}

const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({profile,error, handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save Profile</button>
        </div>
        {
            error && <div className={styles.commonFieldError}>
                {
                    error
                }
            </div>
        }
        <div>
            <b>Name : </b> <Field type="text" placeholder={'fullName'} component={Input} name='fullName'
                                  validate={[required]}/>
        </div>
        <div>
            <b>lookingForAJob : </b> <Field type="checkbox" placeholder={'lookingForAJob'} component={Input}
                                            name='lookingForAJob'/>
        </div>
        <div>
            <b>My professional Skills : </b> <Field type="text" placeholder={'My professional Skills'}
                                                    component={Textarea} name='lookingForAJobDescription'
                                                    validate={[required]}/>
        </div>
        <div>
            <b>About me : </b> <Field type="text" placeholder={'About me'} component={Textarea} name='AboutMe'
                                      validate={[required]}/>
        </div>
        <div>
            <b>Contacts: </b><span>{Object.keys(profile.contacts).map(key => {
            return <div key={key} >
                <b>{key}: </b> <Field type="text" placeholder={'contacts.' + key} component={Input} name={'contacts.' + key}/>
            </div>
        })}
        </span>
        </div>

    </form>
}

export type FormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    AboutMe: string
}

export const ProfileDataFormRedux = reduxForm<FormDataType, ProfileDataFormPropsType>({
    // a unique name for the form
    form: 'edit-profile'
})(ProfileDataForm)