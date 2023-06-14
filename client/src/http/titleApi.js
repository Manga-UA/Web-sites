import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type)=>{
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async ()=>{
    const {data} = await $host.get('api/type')
    return data
}

export const createStatus = async (status)=>{
    const {data} = await $host.post('api/status', status)
    return data
}

export const fetchStatus = async ()=>{
    const {data} = await $host.get('api/status')
    return data
}
