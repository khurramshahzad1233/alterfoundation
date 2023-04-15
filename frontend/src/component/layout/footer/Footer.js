import React,{Fragment,useEffect} from 'react'
import "./Footer.css"
import {Navstate} from "../../context/Navprovider"
import content from "../../data/Data.json"
import {FaPhone} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {FaInstagramSquare,FaFacebookSquare,FaYoutube} from "react-icons/fa"

const Footer = () => {
  const {data,language,setData,} =Navstate();
  console.log(language)

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])
  return (
    <Fragment>
      <section className='homedonate'>
        <div>
          <div>
          <p><img src="./images/Monogram.jpg" alt="logo" />
          </p>
          <div>
          <h3 style={{color:"white"}}>{data.footerpara5}</h3>
          <span style={{color:"white"}}>{data.footerpara6}</span>
          </div>
          
          </div>
          
          <p style={{color:"white"}}>{data.footerpara4}</p>
          <div className='footercontactinfo'>
          <div><FaPhone/><span style={{color:"white"}}> <a href="tel:+923320525105">+923320525105</a></span></div>
          <div><MdEmail/> <span style={{color:"white"}}>alterhopefoundation23@gmail.com</span></div>
        </div>
        <div className='followusdiv'>
          <p>Follow Us</p>
          <p><a href="https://www.facebook.com/profile.php?id=100089889387098" target="blank"><FaFacebookSquare/></a></p>
          <p><a href="https://www.instagram.com/altershopefoundation/" target="blank"><FaInstagramSquare/></a></p>
          <p><a href="https://www.youtube.com"><FaYoutube/></a></p>
        </div>
        </div>

        


      </section>
        <div className="footer">
        <p>Copyright 2023 &copy; Alters Hope Foundation || All Right Reserved</p>
        
        </div>
     
    </Fragment>
  )
}

export default Footer