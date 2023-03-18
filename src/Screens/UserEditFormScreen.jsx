import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components";
import { useUpdateAllJobs } from "../Components/useUserData";
import { useDeleteUser } from "../http/fetchAlljobs";
import { Loader } from "../Loader/Loader";
import HeaderScreen from "./HeaderScreen";

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


export const UserEditForm = (props)=>{

    const [state, setState] = useState({
        ...props.row,
      });
      const {updateJob,isLoading,sucData} = useUpdateAllJobs()
      const {deleteUser,delData} = useDeleteUser()

      const handleChange = useCallback((event) => {
    
        setState((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
    
      }, [setState]);
    
    const handleEventSubmit = async(event)=>{
          event.preventDefault()
          const updateData = {
            userid:state._id,
            data:Object.entries(state).filter(([key,value])=> value !== props.row[key])
            .reduce((obj,[key,value])=>({...obj,[key]:value}),{})
          }
          if(updateData.data.skills){
              updateData.data.skills = updateData.data.skills.split(",").map((skill)=>({name:skill}))

          }
          console.log(updateData)
          await updateJob(updateData)
    }
    
      useEffect(() => {  
        setState((prev) => ({
          ...prev,
          ...props.row,
        }));
      }, [props.row]);

      const handleButtonClick = (id)=>{
        deleteUser({"userid":id})
      }

      if(isLoading){
        return <Loader/>
      }

      return(
        <div>
        <HeaderScreen>{state._id}</HeaderScreen>
        <form onSubmit={handleEventSubmit}>
          <FormContainer>
            <FormDiv>
              <Label htmlFor="name">Full Name:</Label>
              {/* <Controller
                name="company_Name"
                defaultdefaultValue={state.company_Name}
                control={control}
                render={({ value, //onChange }) => ( */}
                  <input
                    type="text"
                    id={state.fullname}
                    name="fullname"
                    value={state.fullname}
                    // {...register("company_Name")}
                    onChange={handleChange}
                  />
                {/* )} */}
              {/* /> */}
            </FormDiv>
            <FormDiv>
              <Label htmlFor="contactNumber">Contact Number:</Label>
              {/* <Controller
                name="description"
                defaultdefaultValue={state.description}
                control={control}
                render={({ value, //onChange }) => ( */}
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={state.contactNumber}
                    onChange={handleChange}
                    // {...register("description")}
                  />
                {/* )} */}
  
              {/* /> */}
            </FormDiv>
            <FormDiv>
              <Label htmlFor="email">Email:</Label>
              <input
                type={"text"}
                id="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
                // {...register("job_name")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="area">Area:</Label>
              <input
                type={"text"}
                id="area"
                name="area"
                value={state.area}
                onChange={handleChange}
                // {...register("address")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="city">City:</Label>
              <input
                type={"text"}
                id="city"
                name="city"
                value={state.city}
                onChange={handleChange}
                // {...register("payment")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="about">About:</Label>
              <input
                type={"text"}
                id="about"
                name="about"
                value={state.about}
                onChange={handleChange}
                // {...register("pincode")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="previousExpereince">Previous Expereince:</Label>
              <input
                type={"text"}
                id="previousExpereince"
                name="previousExpereince"
                value={state.previousExpereince}
                onChange={handleChange}
                // {...register("posted_by")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="skills">Skills:</Label>
              <input
                type={"text"}
                id="skills"
                name="skills"
                value={state.skills}
                onChange={handleChange}
                // {...register("recepient")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="approvedStatus">Approved Status:</Label>
              <input
                type={"text"}
                id="approvedStatus"
                name="approvedStatus"
                value={state.approvedStatus}
                onChange={handleChange}
                // {...register("requirement")}
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
      
}