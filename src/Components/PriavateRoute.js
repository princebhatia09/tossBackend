import React  from "react"
import { Navigate } from "react-router-dom"
const PrivateRoute = ({children})=>{

    const userinfo = JSON.parse( localStorage.getItem("adminInfo"))
    var message = userinfo.data.message
    var d = ""
    if(message==="Admin Login"){
        var base64Url = userinfo.data.token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        var exDate = JSON.parse(jsonPayload)
        console.log(exDate)
        d = new Date(exDate.exp*1000)
        console.log(d > new Date().getTime())        
    }

    return (
        <>
        { (d > new Date().getTime()) ? children : <Navigate to={"/login"}/>}
        </>

    )

}


export default PrivateRoute