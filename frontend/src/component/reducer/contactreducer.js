import {createAction,createReducer} from "@reduxjs/toolkit"

const sendemailrequest=createAction("sendemailrequest");
const sendemailsuccess=createAction("sendemailsuccess");
const sendemailfail=createAction("sendemailfail");
const sendemailreset=createAction("sendemailreset")

const involverequest=createAction("involverequest");
const involvesuccess=createAction("involvesuccess");
const involvefail=createAction("involvefail");
const involvereset=createAction("involvereset")

const clearerror=createAction("clearerror")


const sendemailinitialstate={
    sendemail:{}
};

export const emailreducer=createReducer(sendemailinitialstate,(builder)=>{
    builder.addCase(sendemailrequest,(state,action)=>{
        state.sendemail={};
        state.success=false;
    })
    builder.addCase(sendemailsuccess,(state,action)=>{
        state.sendemail=action.payload.success;
        state.success=true;

    })
    builder.addCase(sendemailfail,(state,action)=>{
        state.sendemail={};
        state.error=action.payload;
        state.success=false;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.sendemail={}
        state.error=null;
        state.success=false;
    })
    builder.addCase(sendemailreset,(state,action)=>{
        state.sendemail={};
        state.success=false;
    })
})


const involveinitialstate={
    involveemail:{}
};

export const involvereducer=createReducer(involveinitialstate,(builder)=>{
    builder.addCase(involverequest,(state,action)=>{
        state.involveemail={};
        state.success=false;
    })
    builder.addCase(involvesuccess,(state,action)=>{
        state.involveemail=action.payload.success;
        state.success=true;

    })
    builder.addCase(involvefail,(state,action)=>{
        state.involveemail={};
        state.error=action.payload;
        state.success=false;
    })
    builder.addCase(clearerror,(state,action)=>{
        state.involveemail={}
        state.error=null;
        state.success=false;
    })
    builder.addCase(involvereset,(state,action)=>{
        state.involveemail={};
        state.success=false;
    })
})