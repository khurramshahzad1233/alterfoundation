import React,{createContext,useContext,useState} from 'react'
const Navcontext=createContext();

const Navprovider = ({children}) => {

    const [selected,setSelected]=useState("")
    const [navcolor,setNavcolor]=useState(false)
    const [sticky,setSticky]=useState(false)
    const [language,setLanguage]=useState("english");
    const [data,setData]=useState({});
    
  return (
    <Navcontext.Provider value={{selected,setSelected,navcolor,setNavcolor,sticky,setSticky,language,setLanguage,data,setData}}>
        {children}
    </Navcontext.Provider>
  )
}

export const Navstate=()=>{
    return useContext(Navcontext)
}

export default Navprovider