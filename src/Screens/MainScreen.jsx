import React from "react"
import styled from "styled-components"
import JobsTable from "./JobsTable"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    
`

export const Main = ()=>{

    return (
        <Container>
            <JobsTable/>
        </Container>
    )
}