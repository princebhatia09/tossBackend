import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import useFetchData from "../http/fetchQuery"
import { Loader } from "../Loader/Loader";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    .Myform{
        input[Type="Text"]{
            float:right;
            padding:1px;
        }
        label{
            float:left;
        }
        input[Type="submit"]{
            posistion:relative;
            top:10px;
        }

    }
    
`

const LoginDiv = styled.div`
    position:relative;
    top:164px;
    div > input{
        float:right;
    }
    div > label{
        float:left;
    }

`

const Header = styled.div``

export const LoginScreen = () => {

    const{register,handleSubmit} = useForm()

    const Onsubmit = (data)=>{
        const {email,password} = data
        postLogin({email,password})
    }
    
    const {isLoading,postLogin,error} = useFetchData()
    
    if(isLoading){
        return <Loader/>
    }
  return (
    <Container>
        <Header>
            <h1> Admin Login</h1>
        </Header>
        <LoginDiv>
            <form onSubmit={handleSubmit(Onsubmit)}>
                <div>
                <label htmlFor ="email">Email</label>
                <input type={"text"} name="email" {...register("email")} /><br/>

                </div>
                <div>

                <label htmlFor ="password">Password</label>
                <input type={"text"} name="password" {...register("password")} /><br/>
                </div>
                <div>
                <button type={"submit"}>Login</button>

                </div>
            </form>
            {error && <div>{error.message}</div>}
        </LoginDiv>

    </Container>

  );
};

