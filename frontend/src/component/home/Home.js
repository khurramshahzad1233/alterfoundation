import React,{Fragment,useEffect} from 'react'
import "./Home.css"

import Header from "../layout/header/Header"
import { Divider } from 'antd';
import Metadata from "../layout/Metadata"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import {GrLanguage} from "react-icons/gr"
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"
import VideoSection from './VideoSection';
import { Carousel } from 'antd';


const Home = () => {
  const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
  };

  const {language,setLanguage,data,setData}=Navstate()

  useEffect(()=>{
    if(language==="english"){
      setData(content.english)
    }else if(language==="spanish"){
      setData(content.spanish)
    }
  },[language,setData])

  
  return (
    <Fragment>
      <Metadata title={`Home Page`}/>
      <div className="homepageheader">
        <div>
          
          
          <p><span><GrLanguage/></span> <span>
            <select 
            className='languageselect'
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}>
              <option value="english" style={{padding:"3px",border:"none",borderRadius:"5px",borderColor:"silver",paddingBlock:"3px"}} className='languageoption'>English</option>
              <option value="spanish">Spanish</option>
            </select>
            </span></p>
        </div>
        <div>
          <h1>{data.homeheading1}</h1>
          <p>{data.homepara1}</p>
        </div>
        <div>
          <p>
          <img src='./images/Monogram.jpg' alt="logo" />
          </p>
          
        </div>
      </div>
      <div className="homeheader">
        <Header type={"home"}/>
      </div>
      <div className="homesec1">
        <motion.div
        initial={{x:"-100%",opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
          <img src="./images/1.png" alt="avatar1" />
        </motion.div>
        <div>
          <motion.h3
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.4}}
          >{data.homeheading2}</motion.h3>
          <br />
        
          <motion.p
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.4}}
          >{data.homepara2} </motion.p>
          <br />
          <motion.h3
          initial={{y:"-300%",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.4}}
          >{data.homeheading3}</motion.h3>
          <br />
          <motion.p
          initial={{y:"-300%",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.4}}
          >{data.homepara3}</motion.p>
        </div>
      </div>

      <section className='slidebackground'>
        <Carousel autoplay>
          <div className="homecarousel" style={contentStyle}>
          <h3>ALTERS HOPE FOUNDATION</h3> 
          <p>Eradicating poverty through Education</p>
          <p><Link to={`/donate`}>DONATE NOW</Link></p>
          </div>
          <div className="homecarousel" style={contentStyle}>
          <h3>EDUCATION IN CHRISTIAN COMMUNITY IN PAKISTAN</h3> 
          <p>According to Survey Only 28.78% literacy rate of Christian Community in Pakistan</p>
          <p><Link to={`/donate`}>DONATE NOW</Link></p>
          </div>
          <div className="homecarousel" style={contentStyle}>
          <h3>CHALLENGES TO EDUCATION IN CHRISTIAN COMMUNITY IN PAKISTAN</h3> 
          <p>Our Christian Community is suffering due to lack of resources  on Education for Christian Community</p>
          <p><Link to={`/donate`}>DONATE NOW</Link></p>
          </div>
          <div className="homecarousel" style={contentStyle}>
          <h3>FUTURE OF EDUCATION IN CHRISTIAN COMMUNITY IN PAKISTAN</h3> 
          <p>Alter Foundation took Initiative for a School Project</p>
          <p><Link to={`/donate`}>DONATE NOW</Link></p>
          </div>
        </Carousel>

      </section>


      <Divider style={{borderColor:"var(--darkgray)"}}>
        <h2 style={{fontFamily:"Roboto",letterSpacing:"2px",color:"var(--blue)"}}>{data.homeheading4}</h2>
        </Divider>

        <div className="graphsec">
          <div><img src="./images/2.png" alt="avatar2" /></div>
          <div><img src="./images/4.png" alt="avatar4" /></div>
          <div><img src="./images/3.png" alt="avatar3" /></div>
          
          
        </div>

        <div className={language==="english"?"homevideoheading":"nohomevideoheading"}>
        <Divider style={{borderColor:"var(--darkgray)"}} >
        <h2 style={{fontFamily:"Roboto",letterSpacing:"3px",fontSize:"1.7rem",color:"var(--blue)"}}>Intro Video</h2>
        </Divider>
        </div>

        

        <div className={language==="english"?"homevideocontainer":"nohomevideocontainer"}>
          <VideoSection/>
        </div>


        <div className={language==="spanish"?"alternewsheading":"noalternewsheading"}>
        <Divider style={{borderColor:"var(--darkgray)"}} >
        <h2 style={{fontFamily:"Roboto",letterSpacing:"3px",fontSize:"1.4rem",color:"var(--blue)"}}>JOEL ALTER </h2><span style={{color:"var(--blue)"}}>(Chairman/President)</span>
        </Divider>
        </div>

        

        <div className={language==="spanish"?"alternewspaper":"noalternewspaper"}>
          <div>
            <img src="./images/altersnewpaper.png" alt="news paper" />
          </div>
        </div>

        <Divider style={{borderColor:"var(--darkgray)",margin:"25px 0"}}>
        <h2 style={{fontFamily:"Roboto",letterSpacing:"2px",color:"var(--blue)"}}>{data.homeheading5}</h2>
        </Divider>

        <section className='homebody1'>
          {language==="english"?<Englishlivestory/>:""}
        <section className={language==="spanish"?"storysec":"nostorysec"}>
        <div>
          <motion.div
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.3}}
          ><img src="./images/5.png" alt="avatar5" /></motion.div>
          <p>{data.homepara4}</p>
        </div>
        <div>
          <p>{data.homepara5}</p>
          <motion.div 
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.3}}
          ><img src="./images/6.png" alt="avatar6" /></motion.div>
        </div>
        <div>
          <motion.div 
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.3}}
          ><img src="./images/7.png" alt="avatar7" /></motion.div>
          <p>{data.homepara6} </p>
        </div>
        <div>
          <p>{data.homepara7}</p>
          <motion.div 
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.3}}
          ><img src="./images/8.png" alt="avatar8" /></motion.div>
        </div>
      </section>

      <section>
        <div className="whysec" 
        
        style={{background:`rgba(0,0,0,0.5) url("./images/9.jpg")`,
      backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"noRpeat",backgroundBlendMode:"darken",borderRadius:"5px"
      }}
        >
          <h3>{data.homeheading6}</h3>
          <motion.p
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.4}}
          >
           {data.homepara8}

          </motion.p>
          <br />
          <motion.p
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.4}}
          >
            {data.homepara9}
          </motion.p>
          <br />
          <motion.p
          initial={{y:"100%",opacity:0,scale:0.1}}
          whileInView={{y:0,opacity:1,scale:1}}
          transition={{delay:0.1,duration:0.4}}
          >
            {data.homepara10}
          </motion.p>
          <br />
        </div>
      </section>
        </section>

      


      <Divider style={{borderColor:"var(--darkgray)",margin:"25px 0"}}>
        <Link to={`/donate`}><h2 style={{fontFamily:"Roboto",letterSpacing:"2px"}}>{data.homeheading7}</h2></Link>
        
        </Divider>

     
    </Fragment>
  )
}



export const Englishlivestory=()=>{
  const {data}=Navstate()
  return(
    <Fragment>
      <section className='englishstorysec'>
      <div>
        <motion.p
        initial={{x:"-100%",opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{delay:0.1,duration:0.4}}
        >{data.homepara4}</motion.p>
          <motion.div
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          ><img src="./images/5.png" alt="avatar5" /></motion.div>
        </div>
        <div>
          <motion.p
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          >{data.homepara5}</motion.p>
          <motion.div 
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          ><img src="./images/6.png" alt="avatar6" /></motion.div>
        </div>
        <div>
          <motion.p
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          >{data.homepara6} </motion.p>
          <motion.div 
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          ><img src="./images/7.png" alt="avatar7" /></motion.div>
        </div>
        <div>
          <motion.p
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          >{data.homepara7}</motion.p>
          <motion.div 
          initial={{x:"-100%",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{delay:0.1,duration:0.4}}
          ><img src="./images/8.png" alt="avatar8" /></motion.div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home