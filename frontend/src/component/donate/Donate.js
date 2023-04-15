import React,{Fragment,useEffect} from 'react';
import "./Donate.css"
import Metadata from "../layout/Metadata"
import Header from "../layout/header/Header";
import { Divider } from 'antd';
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"

const Donate = () => {
  const {data,language,setData,} =Navstate();

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])


  const selectamount=(e,amount)=>{
    console.log(amount)
  }
  
  return (
    <Fragment>
      <Metadata title={`Donate Us`}/>
      <Header/>
      
      <section className='donationsec1'
      style={{background:`url("./images/Donatepage1.png")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}
      >
      <div className="bank-details">
      <h2>{data.donatepara1}</h2>
      <br />
      <div className="bank-info">
        <h3>{data.donatepara2}</h3>
        <p>{data.donatepara3}</p>
      </div>
      <div className="bank-info">
        <h3>{data.donatepara4}</h3>
        <p>{data.donatepara5}</p>
      </div>
      <div className="bank-info">
        <h3>{data.donatepara6}</h3>
        <p>{data.donatepara7}</p>
      </div>
      <div className="bank-info">
        <h3>{data.donatepara8}</h3>
        <p>{data.donatepara9}</p>
      </div>
      <div className="bank-info">
        <h3>{data.donatepara10}</h3>
        <p>{data.donatepara11}</p>
      </div>
      <div className="bank-info">
        <h3>{data.donatepara12}</h3>
        <p>{data.donatepara13}</p>
      </div>
    </div>
      </section>

      {/* <Divider style={{borderColor:"var(--darkgray)"}}>
        <h2 style={{fontFamily:"Roboto",letterSpacing:"2px"}}>{data.donatepara14}</h2>
        </Divider>

      <div className="onlinepaymentcontainer">

        <h4>{data.donatepara15}</h4>
        <div>

        <p onClick={(e)=>selectamount(e,5)}>$5</p>
        <p onClick={(e)=>selectamount(e,10)}>$10</p>
        <p onClick={(e)=>selectamount(e,50)}>$50</p>
        <p onClick={(e)=>selectamount(e,100)}>$100</p>
        <p onClick={(e)=>selectamount(e,500)}>$500</p>
        <p>{data.donatepara16}</p>
        </div>
        
      
      </div> */}
      
      
      


    </Fragment>
  )
}

export default Donate