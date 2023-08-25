import React, { useEffect, useRef } from 'react'
import "./intro.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web", "PHP", "React", "JavaScript", "Moodle"]
    })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile_gif.gif" alt="" className='img'/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Lalit Kumar</h1>
          <h3><span ref={textRef}></span> Developer</h3>
        </div>
        <a href="#portfolio"><KeyboardArrowDownIcon className='downIcon'/></a>
      </div>
    </div>
  )
}
