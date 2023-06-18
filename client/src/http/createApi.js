import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";


export const createScreenWriter = async ()=>{
    const {data} = await $authHost.post('api/screenwriter')
    return data
}

export const fetchScreenWriter = async ()=>{
    const {data} = await $host.get('api/screenwriter')
    return data
}

