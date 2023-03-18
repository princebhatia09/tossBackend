import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import {useFetchUserData} from "../Components/useUserData";
import { connect } from "react-redux";
import { Loader } from "../Loader/Loader";
import { useTableFactory } from "../Components/Table/useTableFactory";
import { UserListDefs } from "../Components/Table/UserTable";
import HeaderScreen from "./HeaderScreen";
import Table from "./Table";
import { useCallback } from "react";
import { useState } from "react";
import { UserEditForm } from "./UserEditFormScreen";

const Container = styled.div`

    display:flex;
    flex-direction:column;
`

const UserScreen = ()=>{
    const {data,isLoading} = useFetchUserData()
    const [x, setX] = useState([]); // useState to store the transformed data

    useEffect(() => {
        if (!data) return; // check if userData is defined
        const nw = data?.map((item) => {
            const profileImages = item?.profileImages?.userProfileImage?.map((image) => image.name);
            const skills = item?.skills?.map((skill) => skill.name);
            return {
                _id: item._id,
                about: item.about,
                approvedStatus: item.approvedStatus,
                area: item.area,
                city: item.city,
                contactNumber: item.contactNumber,
                email: item.email,
                fullname: item.fullname,
                previousExpereince: item.previousExpereince,
                profileImages: profileImages?.join(","),
                skills: skills?.join(","),
            };
        });
        setX(nw); // set transformed data to state
    }, [data]);

    const {renderHeader,renderTbody,selectedRow,visiblity,SetVisibility} = useTableFactory({TableListDefs:UserListDefs,Data:x})
    if (isLoading)return <Loader/>
    
    return (
        <Container>                
            <HeaderScreen>All User Data Table</HeaderScreen>      
            <Table renderHeader={renderHeader} renderTbody={renderTbody} selectedRow={selectedRow} visiblity={visiblity} SetVisibility={SetVisibility} Children={UserEditForm}/> 
            
        </Container>
    )
}

UserScreen.propTypes={

}

UserScreen.defaultProps = {
    
}

export default UserScreen
