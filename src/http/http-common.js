import axios from "axios";
const BASE_URL = "https://walrus-app-towx5.ondigitalocean.app/api"

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type":"application/json",
        "Access-Control-Allow-Origin": "*"
    }
})

export const svcGet = async(url)=>{
    const userinfo = JSON.parse( localStorage.getItem("adminInfo"))
    var message = userinfo.data.token
    const config = {
        url:`${BASE_URL}/${url}`,
        method:'get',
        headers:{
            "Content-type":"application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization":`Bearer ${message}`
        }
    }
    try {
        
        const data= await axios(config)
        return data
    } catch (error) {
        return error        
    }
}

export const svsPut = async(url,mydata)=>{
    const userinfo = JSON.parse( localStorage.getItem("adminInfo"))
    var message = userinfo.data.token
    const config = {
        url:`${BASE_URL}/${url}`,
        method:'put',
        headers:{
            "Content-type":"application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization":`Bearer ${message}`
        },
        data:JSON.stringify(mydata)
    }

    try {
        const data = await axios(config)
        return data
    } catch (error) {
        console.log(error)
    }
    
}

export const svcDel = async(url,mydata)=>{
    const userinfo = JSON.parse( localStorage.getItem("adminInfo"))
    var message = userinfo.data.token
    const config = {
        url:`${BASE_URL}/${url}`,
        method:'delete',
        headers:{
            "Content-type":"application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization":`Bearer ${message}`
        },
        data:JSON.stringify(mydata)
    }

    try {
        const data = await axios(config)
        return data
    } catch (error) {
        console.log(error)
    }
    
}