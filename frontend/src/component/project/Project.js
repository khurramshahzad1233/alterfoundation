import React,{Fragment,useEffect} from 'react';
import "./Project.css"
import Metadata from "../layout/Metadata"
import Header from "../layout/header/Header"
import {motion} from "framer-motion"
import {Navstate} from "../context/Navprovider"
import content from "../data/Data.json"
import {FaTree} from "react-icons/fa"
import {IoMdConstruct} from "react-icons/io"
import {BsBusFrontFill} from "react-icons/bs"
import {RiMoneyEuroBoxFill} from "react-icons/ri"


const Project = () => {
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
      <Metadata title={`Our Projects`}/>
      <Header/>

      <section className='projectheader'
      style={{background:` url("./images/11.jpg")`,backgroundSize:"cover",}}
      >
        <h2>{data.projectpara1}</h2>
      </section>

      <section className='projectsec1'>
        <h3>{data.projectpara2}</h3>
        <br />
        <br />
        <motion.p
        initial={{y:"100%",opacity:0,scale:0.1}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{delay:0.1,duration:0.4}}
        >{data.projectpara3}
        </motion.p>
        <br />
        <motion.p
        initial={{y:"100%",opacity:0,scale:0.1}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{delay:0.1,duration:0.4}}
        >
          {data.projectpara4}
        </motion.p>
        <br />
        <motion.p
        initial={{y:"100%",opacity:0,scale:0.1}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{delay:0.1,duration:0.4}}
        >
          {data.projectpara5}
        </motion.p>
      </section>
      <br />
      <section>
        <div className="projectsec1img">
          <img src="./images/Browsproject1.png" alt="images/Brows Projects 1.png" />
        </div>
      </section>
      <br />
      <section className='projectsec2'>
        <h3>{data.projectpara6}</h3>
        <br />
        <motion.p
        initial={{y:"100%",opacity:0,scale:0.1}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{delay:0.1,duration:0.4}}
        >
         {data.projectpara7}
        </motion.p>
        <br />
        <motion.p
        initial={{y:"100%",opacity:0,scale:0.1}}
        whileInView={{y:0,opacity:1,scale:1}}
        transition={{delay:0.1,duration:0.4}}
        >
          {data.projectpara8}
        </motion.p>
      </section>

      <section className={language==="spanish"?"projectsec3":"noprojectsec3"}>
        <div>
          <br />
        <h3>{data.projectpara9}</h3>
        <p>
          <img src="./images/Browsproject2.jpg" alt="Bows project page 2" />
        </p>
        <br />
        <br />
        <div>
          <p><strong>{data.projectpara10}</strong></p>
          <p>{data.projectpara11}</p>
        </div>
        <div>
          <p><strong>{data.projectpara12}</strong></p>
          <p>{data.projectpara13}</p>
        </div>
        <div>
          <p><strong>{data.projectpara14}</strong></p>
          <p>{data.projectpara15}</p>
        </div>
        <div>
          <p><strong>{data.projectpara16}</strong></p>
          <p>{data.projectpara17}</p>
        </div>
        <div>
          <p><strong>{data.projectpara18}</strong></p>
          <p>{data.projectpara19}</p>
        </div>
        </div>
        

       

        <h4 className={language==="english"?"newprojectcost":"nonewprojectcost"}>Project Cost</h4>

        <h4 className={language==="english"?"newprojectcost1":"nonewprojectcost"}>Given blow are the cost heads</h4>
        <table className={language==="english"?"newprojectcost2":"nonewprojectcost"}>
          {/* <thead> */}
          
          {/* </thead> */}
          <tbody>
          <tr>
              <th>Asset</th>
              <th>Work in Progress</th>
              <th>Equipment</th>
              <th>Operating Expense</th>
            </tr>
            <tr>
              <td>Land Cost</td>
              <td>Construction Cost</td>
              <td>Furniture, Vans and Accessories</td>
              <td>Administrative cost, Salaries, etc.</td>
            </tr>
            <tr>
              <td>$300,000</td>
              <td>$110,000</td>
              <td>$60,000</td>
              <td>$30,000 (for two years)</td>
            </tr>
            <tr>
              <td><FaTree/></td>
              <td><IoMdConstruct/></td>
              <td><BsBusFrontFill/></td>
              <td><RiMoneyEuroBoxFill/></td>
            </tr>
          </tbody>
          <div className={language==="english"?"newprojectcost3":"nonewprojectcost"}>
            <div><p >Total Cost: </p><p>$500,000</p></div>
          
          </div>
          
        </table>

        
        
        
        
        
          
        
      </section>
    </Fragment>
  )
}

export default Project