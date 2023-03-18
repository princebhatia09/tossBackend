import React, { useEffect, useState } from "react";
import { PromoterTableDefs } from "../Components/Table/PromoterTable";
import { useTableFactory } from "../Components/Table/useTableFactory";
import { usePromoterActions } from "../Components/usePromoterData";
import { Loader } from "../Loader/Loader";
import HeaderScreen from "./HeaderScreen";
import {PromoterEditForm} from "./PromoterEditForm";
import Table from "./Table";

const PromoterScreen = ()=>{
  const { data,error,isLoading } = usePromoterActions();
  const [x, setX] = useState([]); // useState to store the transformed data
  
  useEffect(() => {
    if (!data) return; // check if userData is defined
    const nw = data?.map((item) => {
        const profileImages = item?.job_images?.promoterImages?.map((image) => image.name);
        return {
          _id:item._id,
          company_Name: item.company_Name,
          full_name: item.full_name,
          office_address: item.office_address,
          password: item.password,
          work_email: item.work_email,
          profileImages: profileImages?.join(","),
        };
    });
    setX(nw); // set transformed data to state
}, [data]);
  
  const {renderHeader,renderTbody,selectedRow,visiblity,SetVisibility} =  useTableFactory({TableListDefs:PromoterTableDefs,Data:x})

  if (isLoading) {
    return <Loader />;
  }

  if(error){
    return <Loader/>
  }

  return ( 
    <div>
      <HeaderScreen>All Jobs Table</HeaderScreen>      
      <Table renderHeader={renderHeader} renderTbody={renderTbody} selectedRow={selectedRow} visiblity={visiblity} SetVisibility={SetVisibility} Children={PromoterEditForm}/> 
    </div>
        
        )


}
export default PromoterScreen
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import { connect, useDispatch } from "react-redux";
// import styled from "styled-components";
// import { PromoterTableDefs } from "../Components/Table/PromoterTable";
// import { PromoterData } from "../Components/usePromoterData";
// import {
//   ALL_PROMOTER_DATA_FAILURE,
//   ALL_PROMOTER_DATA_LOADING,
//   ALL_PROMOTER_DATA_SUCCESS,
// } from "../constants";
// import { svcGet } from "../http/http-common";
// import HeaderScreen from "./HeaderScreen";
// import Table from "./Table";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const StyledTh = styled.th.withConfig({ componentId: "sc-xyz" })`
//   font-size: 12px;
// `;
// const StyledTd = styled.td.withConfig({ componentId: "sc-td" })`
//   font-size: 15px;
// `;

// export class PromoterScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       error: false,
//       loading: true,
//     };
//     this.tableHeader = this.tableHeader.bind(this);
//   }

//   componentDidMount() {
//     this.props.dispatch({
//       type: ALL_PROMOTER_DATA_LOADING,
//     });
//     this.setState({ error: false, loading: true });
//     this.fetchData();
//   }

//   tableHeader = () => {
//     return Object.keys(PromoterTableDefs).map((key, index) => {
//       return <StyledTh key={index}>{key}</StyledTh>;
//     });
//   };

//   tableBody = ()=>{
//     return this.state.data?.map((row,index)=>{
//       return (
//           <tr key={index}>
//               {Object.keys(PromoterTableDefs).map((key,subindex)=>{
//                   const sortValue = PromoterTableDefs[key].cols[key].sortValue;
//                    return <StyledTd key={subindex}>
//                       {row[sortValue] || "N/A"}
//                   </StyledTd>
//               })}
//           </tr>
//       )
//   })
//   }

//   fetchData = async () => {
//     try {
//       const res = await svcGet("promoter/getallpromoters");
//       this.props.dispatch({
//         type: ALL_PROMOTER_DATA_SUCCESS,
//         payload: res.data,
//       });

//       const newData = [...res.data]?.map((item) => {
//         const profileImages = item?.job_images?.promoterImages?.map((image) => image.name);
//         return {
//             _id: item._id,
//             company_Name: item.company_Name,
//             createdDate: item.createdDate,
//             full_name: item.full_name,
//             office_address: item.office_address,
//             password: item.password,
//             work_email: item.work_email,
//             profileImages: profileImages?.join(","),
//         };
//     });
//       this.setState((prevState) => ({
//         data: [...prevState.data, ...newData],
//         error: false,
//         loading: false,
//       }));
//     } catch (error) {
//       this.props.dispatch({
//         type: ALL_PROMOTER_DATA_FAILURE,
//         payload: error,
//       });
//       this.setState({
//         data: [],
//         error: true,
//         loading: false,
//       });
//     }
//   };

//   render() {
//     return (
//       <Container>
//         <HeaderScreen>All Promoter Table</HeaderScreen>
//         <Table
//           renderHeader={this.tableHeader}
//           renderTbody={this.tableBody}
//         ></Table>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     curr: state.AllPromoters,
//   };
// };

// export default connect(mapStateToProps)(PromoterScreen);
// //
