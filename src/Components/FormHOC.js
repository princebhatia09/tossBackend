import { svsPut } from "../http/http-common"
import React,{ useState } from "react"
import { UpdateAllJobs } from "../http/fetchAlljobs";
// import { useForm } from "react-hook-form"

const withUseFormHoc = (Component)=>{

    return props => {
        // const { register, handleSubmit, errors,control } = useForm()
        const [message, setMessage] = useState();
        const onSubmit = (event,editData) => {
            event.preventDefault()


        }
        return <Component
            // control={control}
            // register={register}
            // handleSubmit={handleSubmit}
            // errors={errors}
            onSubmit={onSubmit}
            message = {message}
            {...props} />

    }

}

export default withUseFormHoc