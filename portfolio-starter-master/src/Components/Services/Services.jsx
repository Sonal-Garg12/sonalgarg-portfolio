import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Sonal_CV.pdf";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Services = ()=>{
  const transition = {duration: 1,  type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 return(
  <div className='services' id='Services'>
  {  /* left side  */}
  <div className='awesome'>
<span style={{color: darkMode?'white':''}}>My Awesome</span>
<span>Services</span>
<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos sunt consequatur, quas eum ratione nobis.
  <br /> Sed sit quis explicabo reprehenderit error veniam quaerat ex.
  </span>
  <a href={Resume} download>
  <button className='button s-button'>Download CV</button>
  </a>
  <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>
  </div>
  {/* Cards Div */}
  <div className='cards'>
     <motion.div 
     initial={{left: '25rem'}}
     whileInView={{left: '14rem'}}
     transition={transition}
     
     style={{left: '11rem'}}>
      <Card 
      emoji = {HeartEmoji}
      heading = {'Design'}
      detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd, Canva"}
      />
     </motion.div>
     {/** second card */}
     <motion.div 
     initial={{left: '25rem'}}
     whileInView={{left: '-1rem'}}
     transition={transition}
     style={{top: "12rem", left: "-4rem"}}>
      <Card 
      emoji={Glasses}
      heading = {"Developer"}
      detail={"HTML, CSS, JavaScript, React, Sketch, Photoshop, Adobe"}
      />
      </motion.div>
        {/** third card */}
     <motion.div 
     initial={{left: '25rem'}}
     whileInView={{left: '11rem' , top: '20rem'}}
     transition={transition}
     style={{top: "19rem", left: "12rem"}}>
      <Card 
      emoji={Humble}
      heading = {"UI/UX"}
      detail={" HTML, CSS, JavaScript, React, Angular, Photoshop "}
      />
      </motion.div>
<div className='s-blur2 blur ' style={{background: "var(--purple)"}}></div>
     </div>
  </div>


 )
}
export default Services