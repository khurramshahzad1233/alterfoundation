import React,{useEffect} from 'react'
import "./App.css";
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import WebFont from "webfontloader"
import Home from './component/home/Home';
import Footer from './component/layout/footer/Footer';
import About from "./component/about/About"
import Member from "./component/members/Member"
import Founder from './component/founder/Founder';
import Project from "./component/project/Project"
import Donate from './component/donate/Donate';
import Join from "./component/join/Join"
import Contact from './component/contact/Contact';
import Notfound from './component/layout/Notfound';




const App = () => {

  useEffect(()=>{

    WebFont.load({google:{
      families:["Roboto","Montserrat"]
    }})
  },[])
  return (
    <Router>
     

      <Routes>

        <Route path='*' element={<Notfound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/members' element={<Member/>}/>
        <Route path='/founders' element={<Founder/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/involved' element={<Join/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App