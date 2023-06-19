import { $authHost,$host } from "./index";
import jwt_decode from "jwt-decode";

export const createGenre = async (genre)=>{
    const {data} = await $authHost.post('api/genre', genre)
    return data
}


export const fetchGenreKeyTitle = async ()=>{
    const {data} = await $host.get('api/titleGenre')
    return data
}

export const fetchGenre = async ()=>{
    const {data} = await $host.get('api/genre')
    return data
}

export const createType = async (type)=>{
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async ()=>{
    const {data} = await $host.get('api/type')
    return data
}

export const createStatus = async (status)=>{
    const {data} = await $authHost.post('api/status', status)
    return data
}

export const fetchStatus = async ()=>{
    const {data} = await $host.get('api/status')
    return data
}


export const createTitles = async (status)=>{
    const {data} = await $authHost.post('api/title', status)
    return data
}
export const fetchTitles = async(statusDatumIdStatus,typeTitleIdType)=>{
    const {data} = await $host.get('api/title',{params:{
        statusDatumIdStatus,
        typeTitleIdType
    }})
    return data
}
export const fetchOneTitles = async(id)=>{
    const {data} = await $host.get('api/title/'+id)
    return data
}

export const createChapter = async (status)=>{
    const {data} = await $authHost.post('api/chapter', status)
    return data
}
export const fetchChapter = async(titleDatumIdTitle)=>{
    const {data} = await $host.get('api/chapter',{params:{
        titleDatumIdTitle
    }})
    return data
}
export const fetchOneChapter = async(id)=>{
    const {data} = await $host.get('api/chapter/'+id)
    return data
}

export const createPages = async (pages)=>{
    const {data} = await $authHost.post('api/page', pages)
    return data
}
export const fetchPages = async(chapterDatumIdChapter)=>{
    const {data} = await $host.get('api/page',{params:{
        chapterDatumIdChapter
    }})
    return data
}





export const fetchTitleGenre = async (titleDatumIdTitle,genreTitleIdGenre)=>{
    const {data} = await $host.get('api/titleGenre',{
        titleDatumIdTitle,
        genreTitleIdGenre
    })
    return data
}