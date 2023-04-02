import React,{useState} from "react";
import styled,{css} from "styled-components";
import HeaderScreen from "./HeaderScreen";

const Container = styled.div`
    display:block;
    position:fixed;
    right:0;
    z-index:1;
    width:40%;
    height:100%;
    border:2px solid #36304a;;
    border-radius:10px;
    background-color: #efefef;
    transform: translateX(100%);
    transition: transform .9s ease-out;
    ${props => props.visible && css `transform: translateX(0);`}
    

`

const PanelContainer = styled.div`

    display:flex;
    flex-direction:column;

`

const CloseButtonConatiner  = styled.div`
    display: flex;
    justify-content: flex-end;
    
`
const CloseButton  = styled.div`
    background-color: #36304a;
    display: flex;
    width: 25px;
    height: 25px;
    justify-content: center;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    padding: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
`
const FormContainer = styled.div`

`

const SideEditPanel = ({row,visiblity,SetVisiblity,title,Children})=>{
    const[SetcomVisiblity] = useState(visiblity)

    const handleVisibility = (value)=>{
        SetVisiblity(value)
        SetcomVisiblity(value)
    }
    
    return (
        <Container visible={visiblity}>
            <PanelContainer>
                <CloseButtonConatiner>
                    <CloseButton onClick={()=>handleVisibility(false)}>X</CloseButton>
                </CloseButtonConatiner>
                <HeaderScreen>EDIT PANEL</HeaderScreen>
                <FormContainer><Children row={row}/></FormContainer>
                
            </PanelContainer>
        </Container>
    )

}

export default SideEditPanel