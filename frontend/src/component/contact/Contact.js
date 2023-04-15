import React,{Fragment,useState,useEffect} from 'react';
import "./Contact.css"
import Metadata from '../layout/Metadata'
import Header from "../layout/header/Header"
import {Spin} from "antd"
import {useDispatch, useSelector} from "react-redux"
import {emailaction,clearerror} from "../action/contactaction";
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"

const Contact = () => {
  const dispatch=useDispatch();

  const {data,language,setData,} =Navstate();
  const{success,error}=useSelector((state)=>state.emailred);

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("")
  const [loading,setLoading]=useState(false);
  
  

  const sendemail=(e)=>{
    e.preventDefault();
    setLoading(true)
    dispatch(emailaction(name,email,message));    
  }

  useEffect(()=>{
    if(success){
      dispatch({type:"sendemailreset"})
      setLoading(false)
      alert("message send successfully");
    }
    if(error){
      dispatch(clearerror());
      setLoading(false);
      alert("network error,try again please")
    }
  },[success,dispatch,error])
  return (
    <Fragment>
      <Metadata title={`Contact Us`}/>
      <Header/>

      <section className='contactpagesec'>
        <div>
        <div className="contactinfo">
          <h3>{data.contpara1}</h3>
          <div>
            <p>{data.contpara2}</p>
            <p>{data.contpara3}</p>
          </div>

          <div>
            <p>{data.contpara4}</p>
           {/* <p>altershopefoundation@gmail.com</p> */}
           <a href="mailto:alterhopefoundation23@gmail.com">alterhopefoundation23@gmail.com</a>
          </div>

          <div>
            <p>{data.contpara5}</p>
            <a href="tel:+923320525105">+923320525105</a>
          </div>

          <div>
            <p>{data.contpara6}</p>
            <a href="http://www.altershopefoundation.org">www.altershopefoundation.org</a>
          </div>

        </div>
          <Spin spinning={loading}>
        <div className="contactform">
          <form
          onSubmit={sendemail}
          >
            <h4>{data.contpara7}</h4>
            <div>
              <input type="text"
              required
              placeholder={data.contpara8}
              name='user_name'
              value={name}
              onChange={(e)=>setName(e.target.value)}

              />
            </div>
            <div>
              <input type="email"
              required
              placeholder={data.contpara9}
              name='user_email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
             <textarea
             required
             placeholder={data.contpara10}
             name='message'
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             ></textarea>
            </div>

              <div>
                <input type="submit"
                disabled={loading?true:false}
                value={data.contpara11}
                />
              </div>
          </form>
          
        </div>
          </Spin>
        </div>
        
      </section>
    </Fragment>
  )
}

export default Contact