import {configureStore} from "@reduxjs/toolkit";
import {emailreducer, involvereducer } from "./component/reducer/contactreducer";
const store=configureStore({
    reducer:{
        emailred:emailreducer,
        involvered:involvereducer,
    }
});

export default store;