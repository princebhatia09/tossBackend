import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTh = styled.th.withConfig({ componentId: "sc-xyz" })`
  font-size: 12px;
`;
const StyledTd = styled.td.withConfig({ componentId: "sc-td" })`
  font-size: 15px;
`;

const StyledTr = styled.tr`
  background-color: ${(props) => (props.selected ? "lightcyan" : "")};
`;

const StyledImg = styled.img`
  width:50px;
  height:50px;
  &:hover{
    width:200px;
    height:200px;
  }
`

const TD = ({keys,children,image,isClick,row,setSelectedRow,SetVisibility})=>{
  
  const handleClick = ()=>{
    setSelectedRow(row)
    SetVisibility(true)
  }
  return (
    
  <StyledTd key={keys} onClick={isClick && handleClick}>
    {image ? children.split(",").map((data,index)=>(
      <StyledImg key={index} src={data} alt={data} width={50} height={50}/>
    )):children}
  </StyledTd>
  
  )

}


export const useTableFactory = ({ TableListDefs, Data }) => {
  const [selectedRow, setSelectedRow] = useState();
  const [visiblity, SetVisibility] = useState(false);
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    settableData(Data);
  }, [tableData, Data]);

  const renderHeader = () => {
    return Object.keys(TableListDefs).map((key, index) => {
      return <StyledTh key={index}>{key}</StyledTh>;
    });
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    SetVisibility(true);
  };
  
  const renderTbody = () => {
    return tableData?.map((row, index) => {
      return (
        <StyledTr
          key={index}
          // onClick={() => handleRowClick(row)}
          selected={selectedRow === row && visiblity === true}
        >
          {Object.keys(TableListDefs).map((key, subindex) => {
            const sortValue = TableListDefs[key].cols[key].sortValue;
            const images = TableListDefs[key].cols[key].images
            const isClick = TableListDefs[key].cols[key].handleClick
            return (
              
              <TD key={subindex} image={images} isClick={isClick} row={row} setSelectedRow={setSelectedRow} SetVisibility={SetVisibility}>{row[sortValue] || "N/A"}</TD>
            );
          })}
        </StyledTr>
      );
    });
  };

  return {
    renderHeader,
    renderTbody,
    selectedRow,
    visiblity,
    SetVisibility,
  };
};
// export const Th = ({Tablekeys})=>{
//     const Dta = Object.entries(Tablekeys)

//     const ThComponent = ()=>{
//         return Dta.map((data)=>(
//             React.createElement(StyledTh,{className:'header'},data[1])
//         ))
//     }

//     // const Th = StyledTh(TableHead)

//     return ThComponent

// }

// export const Td = ({Data})=>{

//     const TdComponent = ()=>{

//         return Data.map((data)=>(
//             React.createElement(StyledTd,null,data[1])
//         ))
//     }

//     return TdComponent

// }
