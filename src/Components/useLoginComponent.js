import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

const useLogin = ()=>{

    const [loginemail,setEmail] = useState()
    const [loginpassword,setPassword] = useState()

    const handleSumit = (email,password)=>{
        setEmail(email)
        setPassword(password)
    }
    
}