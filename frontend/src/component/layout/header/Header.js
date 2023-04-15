import React,{Fragment,useState,useEffect} from 'react'
import "./Header.css"
import {route,spanishroute} from "./constant"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {Navstate} from "../../context/Navprovider"





const Header = ({type}) => {

    const [open,setOpen]=useState(false);
    const [routes,setRoutes]=useState(route)

    
    const {selected,setSelected,navcolor,setNavcolor,sticky,language,setSticky}=Navstate()
    

    const togglebtn=(e)=>{
        setOpen(!open)

    }
    const selecthandler=(e,route)=>{
      setSelected(route)

    }
    
    const changebackground=()=>{
        if(window.scrollY>=80){
            setNavcolor(true)
        }else{
            setNavcolor(false)
        }
    }

    window.addEventListener('scroll',changebackground);

    const homenavbar=()=>{
        if(window.pageYOffset>=140){
            setSticky(true)
        }else{
            setSticky(false)
        }
    }

    window.addEventListener('scroll',homenavbar);


    useEffect(()=>{
        if(language==="english"){
          setRoutes(route)
        }else if(language==="spanish"){
          setRoutes(spanishroute)
        }
      },[language])
    
  return (
    <Fragment>
        <div className="drawarbtn" onClick={togglebtn}><FaBars/></div>
        <div className={type==="home" && sticky?"homenavbar homenavbarsticky ":type==="home"?"homenavbar":navcolor?"navcontainer active":"navcontainer"}>
            {/* <div className="logo">LOGO</div> */}
            <div className="navbar">
                {routes.map((route)=>{

                    
                    return(
                        <div key={route.name} className={selected===route?"selected":"navbarmain"} >
                            <Link to={route.link} style={{textDecoration:"none"}} 
                            
                            onClick={(e)=>selecthandler(e,route)}
                            >{route.name}</Link>
                        </div>
                    )
                })}

            </div>
           
        </div>

        
        <div className={open?"backdrop":"backdrop closebackdrop"} onClick={togglebtn}></div>

        <div className= {open?"burgermenu":"burgermenu closemenu"}>
          {/* <div className='emaildiv'><p>khurram@gmail.com</p></div> */}
          <div className='burgerdivall'>
          {routes.map((route)=>{
                
                return(
                    <div key={route.name} className="singleburgerelement" onClick={togglebtn}>
                        <Link to={route.link} style={{textDecoration:"none"}}>{route.name}</Link>
                    </div>
                )
            })}
          </div>
            
        </div>
    </Fragment>
  )
}







export default Header