import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { svcDel, svcGet, svsPut } from "../http/http-common";
import { StoreData } from "../redux/actions/AllTableActions";
import { useDispatch } from "react-redux";
import { ALL_JOBS_FAILURE } from "../constants";

export const useFetchallData = () => {

  const dispatch = useDispatch()

    const getData= async()=>{
        const res = await svcGet("job/adminaalljobs")
        return res.data
    }

  const { data,error,isLoading} = useQuery(["fetchalldata"],getData,{
    onSuccess: (data)=>{
      dispatch(StoreData(data))
    },
    onError:()=>{
      dispatch({type:ALL_JOBS_FAILURE})
    },
    refetchOnWindowFocus:false,

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

    const res = await svsPut("status/editJobStatusbyadmin",updateData)
    return res.data
  }

  const {isLoading, mutate: updateJob } = useMutation(["updateAllJObs"],getData,{
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

export const useDeleteJobs = ()=>{
  const [delData,setsucData] = useState({})

  const getData = async(updateData)=>{

    const res = await svcDel("job/deletejob",updateData)
    return res.data
  }

  const {isLoading, mutate: deleteJob } = useMutation(["deleteJob"],getData,{
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

export const useDeleteUser = ()=>{
  const [delData,setsucData] = useState({})

  const getData = async(updateData)=>{

    const res = await svcDel("userProfile/deleteuser",updateData)
    return res.data
  }

  const {isLoading, mutate: deleteUser } = useMutation(["deleteUser"],getData,{
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
    deleteUser,
    isLoading,
    delData
  }

}
// export default useFetchallData;



// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//       setQueryData: (data) => dispatch(setQueryData(data, ownProps.queryKey)),
//       setQueryError: (err) => dispatch(setQueryError(err, ownProps.queryKey))
//   }
// };

// const useQuery = (queryKey, queryFn) => {
//   const dispatch = useDispatch();
//   const queryData = useSelector(state => state.queryData[queryKey]);
//   const queryError = useSelector(state => state.queryError[queryKey]);
//   const [queryState, setQueryState] = useState({
//       status: queryData ? 'success' : 'idle'
//   });

//   // map dispatch to props
//   const dispatchProps = useMemo(() => {
//       return mapDispatchToProps(dispatch, {
//           queryKey: queryKey
//       })
//   }, [dispatch, queryKey]);
  
//   useEffect(() => {
//       let isSubscribed = true;
//       if (queryState.status === 'idle') {
//           setQueryState({
//               status: 'loading'
//           });
//           queryFn()
//               .then(data => {
//                   if (isSubscribed) {
//                       dispatchProps.setQueryData(data);
//                       setQueryState({
//                           status: 'success'
//                       });
//                   }
//               })
//               .catch(err => {
//                   if (isSubscribed) {
//                       dispatchProps.setQueryError(err);
//                       setQueryState({
//                           status: 'error'
//                       });
//                   }
//               });
//       }
//       return () => {
//           isSubscribed = false;
//       }
//   }, [queryFn, queryState.status, dispatchProps]);

//   return [queryData, queryError, queryState];
// };

// export default useQuery;