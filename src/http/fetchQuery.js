import { useMemo, useState } from "react";
import { useMutation } from "react-query";
import apiClient, { svcGet } from "../http/http-common";
import {useNavigate} from "react-router-dom"

const useFetchData = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate()


  const { isLoading, mutate: postLogin } = useMutation(
    async ({ email, password }) => {
      return await apiClient.post("/admin/signin", {
        email: email,
        password: password,
      });
    },
    // {
    //   onError: (err) => {
    //     console.log(err);
    //     setError(err.response?.data || err);
        
    //   },
    // },
    {
      onSuccess: (res) => {
        console.log(res)
        const sucdata = {
          status: res.status,
          headers: res.headers,
          data: res.data,
        };
        setResult(sucdata);
        navigate("/main")
        localStorage.setItem("adminInfo",JSON.stringify(sucdata))

      },
    },

  );

  return useMemo(
    () => ({
      isLoading,
      postLogin,
      result,
      error,
    }),
    [isLoading, postLogin, result, error]
  );
};

export default useFetchData;
