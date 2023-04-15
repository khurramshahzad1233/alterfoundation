import React,{Fragment, useEffect} from 'react';
import "./About.css"
import Header from "../layout/header/Header"
import Metadata from "../layout/Metadata"
import { Divider } from 'antd';
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"


const About = () => {
  const {data,language,setData,} =Navstate()
  

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])
  return (
    <Fragment>
      <Metadata title={`About Us`}/>
      <Header/>
      <section className='aboutbody'>
      <section  className='aboutsec1container' style={{background:` url("./images/Aboutuspage1.jpg")`,
      backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundBlendMode:"darken",
      }}>
      <div className='aboutsec1'>
        <h3>{data.aboutheading1}</h3>
        <br />
        <p>{data.aboutpara1}</p>
      </div></section>
      <br/>
      <br/>
      <br/>
      <Divider style={{borderColor:"var(--darkgray)",margin:"25px 0"}}>
        <h2 style={{fontFamily:"Roboto",letterSpacing:"2px"}}>{data.aboutheading2}</h2>
        </Divider>
      <section className='aboutsec2'>
        <h3>{data.aboutheading3}</h3>
        <br />
      
        <p>{data.aboutpara2}</p>
      </section>

      <section className='aboutsec2'>
        <h3>{data.aboutheading4}</h3>
        <br />
        <p>{data.aboutpara3}</p>
      </section>

      <section className='aboutsec3'>
        <h3>{data.aboutheading5}</h3>
      
        <ul>
          <li>{data.aboutpara4}</li>
          <li>{data.aboutpara5}</li>
        </ul>
      </section>

      <section className='aboutsec3 aboutsec3-1'
      style={{background:`url("./images/Aboutuspage2.jpg")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionY:"center"}}
      >
        <h3>{data.aboutheading6}</h3>
      
        <ul>
          <li><strong>{data.aboutheading7} </strong>{data.aboutpara6}</li>
          <li><strong>{data.aboutheading8} </strong>{data.aboutpara7}</li>
          <li><strong>{data.aboutheading9}</strong>{data.aboutpara8}</li>
          <li><strong>{data.aboutheading10}</strong>{data.aboutpara9}</li>
        </ul>
      </section>


      <section className='aboutsec2'>
        <h3>{data.aboutheading11}</h3>
        <br />
        <p>{data.aboutpara10}</p>
      </section>
      </section>
      

      
    </Fragment>
  )
}

export default About