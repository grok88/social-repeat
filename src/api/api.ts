import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {FormDataType} from "../components/profile/prodile-info/ProfileDataForm";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd957613d-94bb-4388-aef0-47e775e83ac5_'
    }
})

//-------USER API-------------
type getUsersRespType = {
    totalCount: number
    error: string
    items: Array<UserType>
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get<getUsersRespType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return axiosInstance.post<FollowCommonType>(`follow/` + userId)
    },
    unFollow(userId: number) {
        return axiosInstance.delete<FollowCommonType>(`follow/` + userId)
    },
}

//-------Profile API-------------
export type getProfileRespType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    // contacts: {
    //     github: string
    //     vk: string
    //     facebook: string
    //     instagram: string
    //     twitter: string
    //     website: string
    //     youtube: string
    //     mainLink: string
    // }
    contacts: {
        [key: string]: string
    },
    photos: {
        small: string
        large: string
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return axiosInstance.get<getProfileRespType>(`profile/` + userId)
    },
    getStatus(userId: number) {
        return axiosInstance.get('profile/status/' + userId)
    },
    updateStatus(status: string) {
        return axiosInstance.put<CommonRespType>('profile/status/', {status})
    },
    savePhoto(file: any) {
        const data = new FormData()
        data.append('image', file);

        return axiosInstance.put<CommonRespType<PhotosType>>('profile/photo', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile(formData: FormDataType) {
        return axiosInstance.put<CommonRespType>('profile', formData)
    }
}


//----------AUTH API -----------------
export const authApi = {
    authMe() {
        return axiosInstance.get<CommonRespType<{
            id: string,
            email: string
            login: string
        }>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        return axiosInstance.post<CommonRespType<{ userId: string }>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logOut() {
        return axiosInstance.delete('auth/login')
    },
}
//----------security API -----------------
export const securityApi = {
    captchaUrl() {
        return axiosInstance.get<{ url: string }>('security/get-captcha-url',)
    },
}


//----------AUTH API -----------------
type CommonRespType<T = {}> = {
    messages: string[]
    resultCode: number
    data: T
}
//----------FOLLOW API -----------------
type FollowCommonType = { resultCode: number, messages: Array<string>, data: {} }


//----------------PROFILE API --------------
export type PhotosType = {
    photos: {
        small: string
        large: string
    }
}

