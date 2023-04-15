import axios from "axios";

export const emailaction=(name,email,message)=>async(dispatch)=>{
    try {
        dispatch({
            type:"sendemailrequest"
        });
        const config={
            headers:{
                "content-type":"application/json"
            },
            withCredentials:true,
        };
        const {data}=await axios.post(`/api/contact/form`,{name,email,message},config)
        dispatch({
            type:"sendemailsuccess",
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:"sendemailfail",
            payload:error.response.data.message,
        })
        
    }
};



export const involveaction=(name,email,phoneno,city,country,category)=>async(dispatch)=>{
    try {
        dispatch({
            type:"involverequest"
        });
        const config={
            headers:{
                "content-type":"application/json"
            },
            withCredentials:true,
        };
        const {data}=await axios.post(`/api/contact/involve`,{name,email,phoneno,city,country,category},config)
        dispatch({
            type:"involvesuccess",
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:"involvefail",
            payload:error.response.data.message,
        })
        
    }
}


export const clearerror=()=>async(dispatch)=>{
    dispatch({type:"clearerror"})
}