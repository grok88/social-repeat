import axios from "axios";
import {UserType} from "../redux/users-reducer";

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd957613d-94bb-4388-aef0-47e775e83ac5'
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

//----------AUTH API -----------------
type AuthMeRespType = {
    messages: string[]
    resultCode: number
    data: {
        id: string,
        email: string
        login: string
    }
}
export const authApi = {
    authMe() {
        return axiosInstance.get<AuthMeRespType>(`auth/me`)
    }
}
//----------FOLLOW API -----------------
type FollowCommonType = { resultCode: number, messages: Array<string>, data: {} }

