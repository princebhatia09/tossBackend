import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { svcDel, svcGet, svsPut } from "../http/http-common";
import { PromoterFailuer, PromoterLoading, PromoterSuccess } from "../redux/actions/PromoterActions";

export const usePromoterActions = () => {
  const dispatch = useDispatch();

  dispatch(PromoterLoading())

  const getData = async () => {
    const res = await svcGet("promoter/getallpromoters");
    return res.data;
  };
  const { data, error, isLoading } = useQuery(["fetchallpromoters"], getData, {
    onSuccess: (data1) => {
      dispatch(PromoterSuccess(data1));
    },
    onError: (err) => {
      dispatch(PromoterFailuer(data));
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
  return useMemo(
    () => ({
      data,
      error,
      isLoading,
    }),
    [data, error, isLoading]
  );
};

export const useUpdatePromoter = ()=>{
  const [sucData,setsucData] = useState({})

  const getData = async(updateData)=>{

    const res = await svsPut("promoter/editPromoterbyAdmin",updateData)
    return res.data
  }

  const {isLoading, mutate: updateJob } = useMutation(["updatePromoter"],getData,{
    onSuccess:(successData)=>{
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

export const useDeletePromoter = ()=>{
  const [delData,setsucData] = useState({})

  const getData = async(updateData)=>{

    const res = await svcDel("promoter/deletepromoter",updateData)
    return res.data
  }

  const {isLoading, mutate: deleteJob } = useMutation(["deletePromoter"],getData,{
    onSuccess:(successData)=>{
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
    deleteJob,
    isLoading,
    delData
  }

}

export const PromoterData = ()=>{
    const {data,error,isLoading} = usePromoterActions()
    return useMemo(
        () => ({
          data,
          error,
          isLoading,
        }),
        [data, error, isLoading]
      );
    
}