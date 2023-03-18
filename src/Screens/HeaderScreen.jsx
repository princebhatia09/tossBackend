import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"

const Header = styled.h2`
    display:flex;
    justify-content:center;

`
const HeaderScreen = ({children})=>{

    return (
        <Header>{children}</Header>
    )

}

HeaderScreen.propTypes={
    children:PropTypes.string,
}

HeaderScreen.defaultProps={
    children:null
}

export default HeaderScreen