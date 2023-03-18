import React,{useState,useCallback} from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const SideMainDiv = styled.div`
  background-color: #efefef;
  z-index: 1;
  height: 100%;
  width: ${(props) => props.width};
  overflow-x: hidden;
  border: 1px solid white;
  border-radius: 10px;
  transition: .9s;
  padding-top:50px;
  position:fixed;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

const UlComponent = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  padding: 20px;
  overflow:hidden;
  &::before {
    content: "Toss Panel";
    border: 1px solid;
    border-radius:10px;
    background-color:#36304a;
    color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 9px;

  }
`;

const ListComponent = styled.li`
  margin-top: 50px;
  padding: 10px;
  overflow:hidden;
  border-bottom: 1px solid black;
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    margin:0;
    border: 1px solid;
    border-radius:10px;
    background-color:#36304a;
    color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 9px;

  }

  a:visted {
    color: green;
  }
  `;
const rotate = keyframes`
  from{
      transform:rotate(0deg);
  }
  to{
      transform:rotate(180deg);
  }
  `

const StyledButton = styled.div`
    background-color: #36304a;
    border: 1px solid pink;
    position:fixed;
    height:50px;
    width:50px;
    border-radius: 50%;
    display:inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        animation:${rotate} 1s linear;
        background-color:gray;
    }
    z-index:1;
`
const Button = styled.button`
  background-color: #efefef;
  color:#000;
  margin:7px;
  font-size:1.5rem;
  &:hover{
      animation:${rotate} 1s linear;
  }
  margin-top:8px;
  border:1px solid white;
  border-radius:10px;
  position:fixed;
`;

export const List = (props) => {
  return (
    <ListComponent>
      <Link to={props.name.url}>{props.name.name}</Link>
    </ListComponent>
  );
};

const ToggleButton = ({ sidePanelVal, setSidePanelOpen }) => {
  const onMenuClose = useCallback(() => {
    sidePanelVal ? setSidePanelOpen(false) : setSidePanelOpen(true);
  }, [sidePanelVal, setSidePanelOpen]);

  return(
    <StyledButton>
        <Button onClick={onMenuClose}>☰</Button>
    </StyledButton>
  ) 
};

ToggleButton.prototypes = {
  setSidePanelOpen: false,
};

const SidePanel = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const renderOptions = [
    { name: "Main Menu", value: "main_menu", url: "/main" },
    { name: "User Data", value: "user_data", url: "/userData" },
    { name: "PromoterData", value: "promoter_data", url: "/promoterData" },
    { name: "Income Page", value: "income_page", url: "/incomepage" },
  ];

  return (
    <>
      <SideMainDiv width={sidePanelOpen ? "20%" : "0px"}>
        <UlComponent>
          {renderOptions.map((data, index) => (
            <List key={index} name={data} />
          ))}
        </UlComponent>
      </SideMainDiv>

      <ToggleButton
        setSidePanelOpen={setSidePanelOpen}
        sidePanelVal={sidePanelOpen}
      >

      </ToggleButton>
    </>
  );
};

SidePanel.propTypes = {};

export default SidePanel;
