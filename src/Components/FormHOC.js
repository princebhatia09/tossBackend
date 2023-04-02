import React,{ useState } from "react"

const withUseFormHoc = (Component)=>{

    return props => {
        const [message] = useState();
        const onSubmit = (event,editData) => {
            event.preventDefault()


        }
        return <Component
            onSubmit={onSubmit}
            message = {message}
            {...props} />

    }

}

export default withUseFormHoc