import { createGlobalState } from "react-hooks-global-state";
const {setGlobalState , useGlobalState,getGlobalState } = createGlobalState({

    user : null ,
  




})
export{useGlobalState,setGlobalState,getGlobalState}