import { ADD_ALL_JOBS_DATA } from "../../constants"

export const StoreData = (data)=>{
    return {
        type:ADD_ALL_JOBS_DATA,
        payload:data
    }
}
