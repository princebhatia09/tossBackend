import React from "react";
import { connect } from "react-redux";
import { TableListDefs } from "../Components/Table/DynamicTable";
import { useTableFactory } from "../Components/Table/useTableFactory";
import {useFetchallData} from "../http/fetchAlljobs";
import { Loader } from "../Loader/Loader";
import FormScreen from "./FormScreen";
import HeaderScreen from "./HeaderScreen";
import Table from "./Table";


const mapStateToProps = (state) => {
  return {
    curr: state.AllJobs,
  };
};

const JobsTable = (props) => {
  const { isLoading } = useFetchallData();

  const Data = props.curr.Jobs
  
  const {renderHeader,renderTbody,selectedRow,visiblity,SetVisibility} =  useTableFactory({TableListDefs,Data})

 if (isLoading) {
    return <Loader />;
  }

  return ( 
    <div>
      <HeaderScreen>All Jobs Table</HeaderScreen>      
      <Table renderHeader={renderHeader} renderTbody={renderTbody} selectedRow={selectedRow} visiblity={visiblity} SetVisibility={SetVisibility} Children={FormScreen}/> 
    </div>
        
        )
            
};

export default connect(mapStateToProps)(JobsTable);
