import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login_user, password_user, email)=>{
    const {data} = await $host.post('api/user/registration', {
        login_user,
        password_user,
        email,
        roleUserIdRole: 1,/////визначитись з ролями
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (login_user, password_user)=>{
    const {data} = await $host.post('api/user/login', {
        login_user,
        password_user,
    })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async ()=>{

    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

export const update = async ()=>{
    const {data} = await $authHost.get('api/user/')
}

export const updatePassword = async (formdata)=>{
    const {data} = await $authHost.put('api/user/password',formdata)
}

export const updateImage = async (formdata)=>{
    const {data} = await $authHost.put('api/user/image',formdata)
}

export const fetchOneUser = async(id)=>{
    const {data} = await $host.get('api/user/'+id)
    return data
}

export const addMarker = async (userDatumIdUser,titleDatumIdTitle)=>{
    const {data} = await $authHost.post('api/marker',{
        userDatumIdUser,
        titleDatumIdTitle,
    })
    return data
}
export const fetchMarker = async (userDatumIdUser, titleDatumIdTitle,limit,page)=>{
    const {data} = await $authHost.get('api/marker',{params:{
        userDatumIdUser, 
        titleDatumIdTitle,
        limit,
        page,
    }
    })
    return data
}
export const deleteMarker = async (id)=>{
    const {data} = await $authHost.delete('api/marker/'+ id )

}