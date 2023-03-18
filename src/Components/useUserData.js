import { useMemo, useState} from "react";
import { useMutation, useQuery } from "react-query";
import { svcGet, svsPut } from "../http/http-common";
import { useDispatch } from "react-redux";
import { UserData, UserDataFail } from "../redux/actions/AllUserActions";

export const useFetchUserData = () => {

  const dispatch = useDispatch()

    const getData= async()=>{
        const res = await svcGet("userProfile/allusers")
        return res.data
    }

  const { data,error,isLoading} = useQuery(["fetchallusers"],getData,{
    onSuccess: (data)=>{
        dispatch(UserData(data))

    },
    onError:(err)=>{
        dispatch(UserDataFail(err))
    },
    refetchOnWindowFocus:false,
    // enabled:false,
  });

  return useMemo(
    () => ({
        data,error,isLoading
    }),
    [data,error,isLoading]
  );
};

export const useUpdateAllJobs = ()=>{
  const [sucData,setsucData] = useState({})

  const getData = async(updateData)=>{

    const res = await svsPut("userProfile/editUserProfile",updateData)
    return res.data
  }

  const {isLoading, mutate: updateJob } = useMutation(["updateAllUsers"],getData,{
    onSuccess:(successData)=>{
      console.log(successData)
      setsucData(successData)
      return successData
    },
    onError:(failError)=>{
      return failError
    },
    onSettled:(settled)=>{
      return settled
    }

  })

  return {
    updateJob,
    isLoading,
    sucData
  }

}

