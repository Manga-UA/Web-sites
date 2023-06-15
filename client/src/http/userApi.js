import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login_user, password_user, email)=>{
    const {data} = await $host.post('api/user/registration', {
        login_user,
        password_user,
        email,
        roleUserIdRole: 1,/////визначитись з ролями
    })
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const login = async (login_user, password_user)=>{
    const {data} = await $host.post('api/user/login', {
        login_user,
        password_user,
    })
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const check = async ()=>{
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}