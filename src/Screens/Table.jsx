import React from "react";
import {PropTypes} from "prop-types"
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import SideEditPanel from "./Panel";

const Container = styled.div`
  display:flex;
`

const StyledTable = styled.table`
    border-collapse: collapse;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    thead > tr {
        background-color: #36304a;
        height:60px;
        color:#fff;
        text-transform: uppercase;
        text-align:center;
      }
      
      td {
          width: 260px;
          padding-left: 40px;
        }
      tbody tr {
        // :nth-of-type(odd) {
        //   background-color: #efefef;
        // }
        height:50px;
        font-family: OpenSans-Regular;
        font-size: 25px;
        color: gray;
        line-height: 1.2;
        font-weight: unset;
        :hover {
          border: 1px solid lightblue;
        }
      }
    
`
const StyledThead = styled.thead`


`
const StyledTbody = styled.tbody`
`


const Table = ({renderHeader,renderTbody,isLoading,selectedRow,visiblity,SetVisibility,Children})=>{

    if(isLoading){
        return <Loader/>
    }

    return(
      <Container>

        <StyledTable>
        <StyledThead>
          <tr>
            {renderHeader()}
          </tr>
        </StyledThead>
        <StyledTbody>
          {renderTbody()}
        </StyledTbody>
      </StyledTable>
        {
          visiblity  && <SideEditPanel row={selectedRow} visiblity={visiblity} SetVisiblity={SetVisibility} Children={Children}/>
        }
      </Container>
    )
    
}

Table.propTypes={
    renderHeader:PropTypes.func,
    renderTbody:PropTypes.func,
    selectedRow:PropTypes.object,
    visiblity:PropTypes.bool,
    SetVisibility:PropTypes.func,
}

Table.defaultProps={
    renderHeader:null,
    renderTbody:null,
    visiblity:false,
    SetVisibility:null,
    
}

export default Table