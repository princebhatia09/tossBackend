import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components";
import { useDeletePromoter, useUpdatePromoter } from "../Components/usePromoterData";
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


export const PromoterEditForm = (props)=>{

    const [state, setState] = useState({
        ...props.row,
      });
      console.log(state)
      const {updateJob,isLoading} = useUpdatePromoter()
      const {deleteUser} = useDeletePromoter()

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
                    id={state.full_name}
                    name="full_name"
                    value={state.full_name}
                    // {...register("company_Name")}
                    onChange={handleChange}
                  />
                {/* )} */}
              {/* /> */}
            </FormDiv>
            <FormDiv>
              <Label htmlFor="company_Name">Company Name:</Label>
              {/* <Controller
                name="description"
                defaultdefaultValue={state.description}
                control={control}
                render={({ value, //onChange }) => ( */}
                  <input
                    type="text"
                    id="company_Name"
                    name="company_Name"
                    value={state.company_Name}
                    onChange={handleChange}
                    // {...register("description")}
                  />
                {/* )} */}
  
              {/* /> */}
            </FormDiv>
            <FormDiv>
              <Label htmlFor="office_address">Office_Address:</Label>
              <input
                type={"text"}
                id="office_address"
                name="office_address"
                value={state.office_address}
                onChange={handleChange}
                // {...register("job_name")}
              />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="work_email">Work_Email:</Label>
              <input
                type={"text"}
                id="work_email"
                name="work_email"
                value={state.work_email}
                onChange={handleChange}
                // {...register("address")}
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