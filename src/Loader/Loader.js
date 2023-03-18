import React from "react"
import styled,{keyframes}  from "styled-components"

const Loaders = styled.div`
    width:100px;
    height:100px;
    border :1px solid black;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin auto;
    border-radius:50%;
`
const keyFrame = keyframes`
    0%{
    transform:rotate(0deg)
              translate(-165px)
              rotate(0deg);
  
  }
  100%{
    transform:rotate(360deg)
              translate(-165px)
              rotate(-360deg);
  }
`

const Circle = styled.div`
    width:10px;
    height:10px;
    border-radius:50%;
    position:absolute;
    background:cyan;
    top:0; bottom:0; left:0;right:0;
    overflow:hidden;
    margin:auto;
    z-index:1;
    animation: ${keyFrame} 6s linear infinite;
    
`

export const Loader = ()=>{

    return (
        <Loaders>
            <Circle/>
        </Loaders>

    )

}