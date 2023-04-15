import React,{Fragment,useState,useEffect} from 'react'
import './Join.css'
import Metadata from "../layout/Metadata"
import Header from "../layout/header/Header";
import { involveaction,clearerror } from '../action/contactaction';
import { useDispatch,useSelector } from 'react-redux';
import {Spin} from "antd"
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"


const Join = () => {
  const dispatch=useDispatch();

  const {data,language,setData,} =Navstate()
  const {success,error}=useSelector((state)=>state.involvered);

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])

 

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phoneno,setPhoneno]=useState("");
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [category,setCategory]=useState("");
  const [loading,setLoading]=useState("")
  


  useEffect(()=>{
    if(success){
      dispatch({type:"involvereset"});
      setLoading(false);
      alert("form submitted successfully")
    };
    if(error){
      dispatch(clearerror());
      setLoading(false);
      alert("network error, try agina please")
    }
  },[success,dispatch,error])
  const joinushandler=(e)=>{
    e.preventDefault();
    setLoading(true)

    dispatch(involveaction(name,email,phoneno,city,country,category))

  }

  return (
    <Fragment>
      <Metadata title={`Join Us`}/>
      <Header/>
      <Spin spinning={loading}>
      <section className='joinsec1'
      style={{background:`url("./images/Getinvolvedpage1.jpg")`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionY:"center"}}
      >
        <div>
          <h3>{data.joinpara1}</h3>
          <br />
          <form 
          onSubmit={joinushandler}>
            <div>
              <input type="text"
              required
              placeholder={data.joinpara3}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div>
              <input type="text"
              required
              placeholder={data.joinpara4}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            <div>
              <input type="number"
              required
              placeholder={data.joinpara5}
              value={phoneno}
              onChange={(e)=>setPhoneno(e.target.value)}
              />

            </div>

            <div>
              <input type="text"
              required
              placeholder={data.joinpara6}
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              />
            </div>

            <div>
              <input type="text"
              required
              placeholder={data.joinpara7}
              value={country}
              onChange={(e)=>setCountry(e.target.value)}
              />
            </div>

            <div>
              <select onChange={(e)=>setCategory(e.target.value)}>
                <option value="">{data.joinpara8}</option>

                
                <option value={data.joinpara9}>{data.joinpara9}</option>
                <option value={data.joinpara10}>{data.joinpara10}</option>
                <option value={data.joinpara11}>{data.joinpara11}</option>
                <option value={data.joinpara12}>{data.joinpara12}</option>
                <option value={data.joinpara13}>{data.joinpara13}</option>
                <option value={data.joinpara14}>{data.joinpara14}</option>
                <option value={data.joinpara15}>{data.joinpara15}</option>
               
              </select>
            </div>

            <div>
              <input type="submit"
              value={data.joinpara2}
              />
            </div>
           


          </form>

        </div>
      </section>
        </Spin>

      
    </Fragment>
  )
}

export default Join