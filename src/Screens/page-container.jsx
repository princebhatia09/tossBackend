import {PropTypes} from "prop-types"
import React,{forwardRef} from "react"
import styled from "styled-components"
import { Loader } from "../Loader/Loader"

const StyledDiv = styled.div`

    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;

`

const PageContainer = forwardRef(({children},ref)=>{

    return <StyledDiv ref={ref}>{children ? children :<Loader/>}</StyledDiv>

})

PageContainer.propTypes={
    children:PropTypes.node,

}

PageContainer.defaultProps={
    children:null
}

export default PageContainer