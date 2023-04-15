import React,{Fragment,useEffect} from 'react';
import "./Founder.css"
import Metadata from "../layout/Metadata";
import Header from "../layout/header/Header"
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"

const Founder = () => {
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
      <Metadata title={`Founder Page`}/>
      <Header/>
      <section className='founderbody'
      style={{background:`url("./images/Cofounderspage1.jpg")`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}
      >
      <h3 className='founderheading'>{data.founderpara1}</h3>

<section className='singlefounderinfo'>
  <div>
  <div>
  <h4>{data.founderpara2}</h4>
  <p>{data.founderpara3}</p>
  <ul>
    <li>{data.founderpara4}</li>
    <li>{data.founderpara5}</li>
  </ul>
  <p>{data.founderpara6}</p>
  
  </div>
  <div>
    <img src="./images/Brentmeyers.jpg" alt="Brent Meyers" />
  </div>
  </div>        
</section>

<section className='singlefounderinfo'>
  <div>
  <div>
  <h4>{data.founderpara7}</h4>
  
  <ul>
    <li>{data.founderpara8}</li>
    <li>{data.founderpara9}</li>
    <li>{data.founderpara10}</li>
    <li>{data.founderpara11}</li>
    
  </ul>
  <p>{data.founderpara12}</p>
  
  </div>
  <div>
    <img src="./images/Danielbrandi.jpg" alt="Daneiel BrandI" />
  </div>
  </div>  
</section>

<section className='singlefounderinfo'>
  <div>
  <div>
  <h4>{data.founderpara13}</h4>
  <p></p>
  <ul>
    <li>
      
    </li>
    <li>
      
    </li>
  </ul>
  <p>
    
  </p>
  
  </div>
  <div>
    <img src="./images/Wescarpenter.jpg" alt="Wes Carpenter" />
  </div>
  </div>
  
  
  

  
</section>
      <br/>
      <br/>
      <br/>
      </section>
      
      
    </Fragment>
  )
}

export default Founder