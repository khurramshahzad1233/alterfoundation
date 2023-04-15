import React,{Fragment,useEffect} from 'react'
import "./Member.css"
import Header from "../layout/header/Header"
import Metadata from "../layout/Metadata"
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"


const Member = () => {
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
      <Metadata title={`Our Members`}/>
      <Header/>
      <section className='memberbody'>
      <section className='membersecimg1'  >
        <div style={{background:`url("./images/Memberspage1.jpg")`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionY:"center"}}>
          <h4>{data.memberheading1}</h4>
        </div>
      </section>

      <h3 className='memberheading'>{data.memberheading2}</h3>
      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading3}</h4>
        <p>{data.memberheading4}</p>
        <ul>
          <li>{data.memberpara1}</li>
          <li>{data.memberpara2}</li>
          <li>{data.memberpara3}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/joelalter.jpg" alt="joel Alter" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo singlememberinfo1":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading5}</h4>
        <p>{data.memberheading6}</p>
        <ul>
          <li>{data.memberpara4}</li>
          <li>{data.memberpara5}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Iramjoel.jpg" alt="Iram Joel" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading7}</h4>
        <p>{data.memberheading8}</p>
        <ul>
          <li>{data.memberpara6}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Alterbm.jpg" alt="Alter Bam" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading9}</h4>
        <p>{data.memberheading10}</p>
        <ul>
          <li>{data.memberpara7}</li>
          <li>{data.memberpara8}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Nasirshakeel.jpg" alt="Nasir Shakeel" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading11}</h4>
        <p>{data.memberheading12}</p>
        <ul>
          <li>{data.memberpara9}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Rashidafazal.jpg" alt="Rashida Fazal" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberheading13}</h4>
        <p>{data.memberheading14}</p>
        <ul>
          <li>{data.memberheading15}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Christeena.jpg" alt="Christeena" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className={language==="spanish"?"singlememberinfo":"nosinglememberinfo"}>
        <div>
        <div>
        <h4>{data.memberpara10}</h4>
        <p>Advisor</p>
        <ul>
          <li>{data.memberpara11}</li>
          <li>{data.memberpara12}</li>
        </ul>
        
        </div>
        <div>
          <img src="./images/Noelalter.jpg" alt="Noel Alter" />
        </div>
        </div>
        
        
        

        
      </section>
      {language==="english"?<Englishmember/>:""}
      
      </section>
      
    </Fragment>
  )
}




export const Englishmember=()=>{
  const {data} =Navstate()
  return(
    <Fragment>
      <section className='englishmembersec'>
      
      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading3}</h4>
        <br />
        <p>{data.memberheading4}</p>
        <br />
        <div>
          <p>{data.memberpara1}</p>
          <br />
          <p>{data.memberpara2}</p>
          <br />
          <p>{data.memberpara3}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/joelalter.jpg" alt="joel Alter" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading5}</h4>
        <br />
        <p>{data.memberheading6}</p>
        <br />
        <div>
          <p>{data.memberpara4}</p>
          <br />
          <p>{data.memberpara5}</p>
          <br />
          <p>{data.memberpara30}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Iramjoel.jpg" alt="Iram Joel" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading7}</h4>
        <br />
        <p>{data.memberheading8}</p>
        <br />
        <div>
          <p>{data.memberpara6}</p>
          <br />
          <p>{data.memberpara21}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Alterbm.jpg" alt="Alter Bam" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading9}</h4>
        <br />
        <p>{data.memberheading10}</p>
        <br />
        <div>
          <p>{data.memberpara7}</p>
          <br />
          <p>{data.memberpara8}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Nasirshakeel.jpg" alt="Nasir Shakeel" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading11}</h4>
        <br />
        <p>{data.memberheading12}</p>
        <br />
        <div>
          <p>{data.memberpara9}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Rashidafazal.jpg" alt="Rashida Fazal" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberheading13}</h4>
        <br />
        <p>{data.memberheading14}</p>
        <br />
        <div>
          <p>{data.memberheading15}</p>
          <br />
          <br />
          <p>{data.memberpara20}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Christeena.jpg" alt="Christeena" />
        </div>
        </div>
        
        
        

        
      </section>

      <section className="englishmemberinfo">
        <div>
        <div>
        <h4>{data.memberpara10}</h4>
        <br />
        <div>
          <p>{data.memberpara11}</p>
          <br />
          <p>{data.memberpara12}</p>
        </div>
        
        </div>
        <div>
          <img src="./images/Noelalter.jpg" alt="Noel Alter" />
        </div>
        </div>
        
        
        

        
      </section></section>
    </Fragment>
  )
}

export default Member