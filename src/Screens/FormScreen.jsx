import React, { useCallback, useEffect, useState } from "react";
import withUseFormHoc from "../Components/FormHOC";
import HeaderScreen from "./HeaderScreen";
import styled from "styled-components";
import { useDeleteJobs, useUpdateAllJobs } from "../http/fetchAlljobs";
import { Loader } from "../Loader/Loader";

const Label = styled.label`
  display: inline-block;
  width: 140px;
  text-align: center;
  border: 1px solid white;
  color: white;
  background-color: #36304a;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 15px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 10px;
  input[type="text"] {
    float: center;
    border: 1px solid white;
    border-radius: 2px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 20px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }
`;

const FormDiv = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

const Submit = styled.button`
  border: 1px solid white;
  background-color: #36304a;
  border-radius: 2.1px;
  color: white;
  height: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const FormScreen = (props) => {
  const [state, setState] = useState({
    ...props.row,
  });
  const {updateJob,isLoading} = useUpdateAllJobs()
  const {deleteJob} = useDeleteJobs()

  const handleChange = useCallback((event) => {

    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  }, [setState]);

const handleEventSubmit = useCallback((event)=>{
      event.preventDefault()
      const updateData = {
        userid:state._id,
        data:Object.entries(state).filter(([key,value])=> value !== props.row[key])
        .reduce((obj,[key,value])=>({...obj,[key]:value}),{})
      }
      updateJob(updateData)
},[props.row,state,updateJob])

  useEffect(() => {  
    setState((prev) => ({
      ...prev,
      ...props.row,
    }));
  }, [props.row]);

  const handleButtonClick = (id)=>{
    deleteJob({"userid":id})
  }

  if(isLoading){
    return <Loader/>
  }

  
  return (
    <div>
      <HeaderScreen>{state._id}</HeaderScreen>
      <form onSubmit={handleEventSubmit}>
        <FormContainer>
          <FormDiv>
            <Label htmlFor="name">Company Name:</Label>
            {/* <Controller
              name="company_Name"
              defaultdefaultValue={state.company_Name}
              control={control}
              render={({ value, //onChange }) => ( */}
                <input
                  type="text"
                  id={state.company_Name}
                  name="company_Name"
                  value={state.company_Name}
                  // {...register("company_Name")}
                  onChange={handleChange}
                />
              {/* )} */}
            {/* /> */}
          </FormDiv>
          <FormDiv>
            <Label htmlFor="description">Description:</Label>
            {/* <Controller
              name="description"
              defaultdefaultValue={state.description}
              control={control}
              render={({ value, //onChange }) => ( */}
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                  // {...register("description")}
                />
              {/* )} */}

            {/* /> */}
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_name">Job Name:</Label>
            <input
              type={"text"}
              id="job_name"
              name="job_name"
              value={state.job_name}
              onChange={handleChange}
              // {...register("job_name")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_status">Job Status:</Label>
            <input
              type={"text"}
              id="job_status"
              name="job_status"
              value={state.job_status}
              onChange={handleChange}
              // {...register("job_status")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_address">Job Address:</Label>
            <input
              type={"text"}
              id="job_address"
              name="address"
              value={state.address}
              onChange={handleChange}
              // {...register("address")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_payment">Payment:</Label>
            <input
              type={"text"}
              id="job_payment"
              name="payment"
              value={state.payment}
              onChange={handleChange}
              // {...register("payment")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_pincode">Pincode:</Label>
            <input
              type={"text"}
              id="job_pincode"
              name="pincode"
              value={state.pincode}
              onChange={handleChange}
              // {...register("pincode")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_postedby">Posted By:</Label>
            <input
              type={"text"}
              id="job_postedby"
              name="posted_by"
              value={state.posted_by}
              onChange={handleChange}
              // {...register("posted_by")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_recepient">Recepient:</Label>
            <input
              type={"text"}
              id="job_recepient"
              name="recepient"
              value={state.recepient}
              onChange={handleChange}
              // {...register("recepient")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_requirement">Requirement:</Label>
            <input
              type={"text"}
              id="job_requirement"
              name="requirement"
              value={state.requirement}
              onChange={handleChange}
              // {...register("requirement")}
            />
          </FormDiv>
          <FormDiv>
            <Label htmlFor="job_workers">Workers:</Label>
            <input
              type={"text"}
              id="job_workers"
              name="workers"
              value={state.workers}
              onChange={handleChange}
              // {...register("workers")}
            />
          </FormDiv>
        </FormContainer>
        <FormDiv>
          <Submit type="submit">Submit</Submit>
        <button onClick={()=>{handleButtonClick(state._id)}} style={{backgroundColor:"red",color:"white"}} >Delete</button>
        </FormDiv>
      </form>
    </div>
  );
};

export default withUseFormHoc(FormScreen);
