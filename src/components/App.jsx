import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Textbox from './textbox'
import Experience from './Experience'
import AboutMe from './AboutMe'
import References from './References'
import PersonalInfo from './personalInfo'
import Photo from './Photo'
import Education from './Education'
import CareerObj from './CareerObj'
import Header from './Header'
import TechSkills from './TechSkills'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="side">
          <CareerObj></CareerObj>
          <TechSkills></TechSkills>
          <References></References>
          <Education></Education>
          <AboutMe></AboutMe>
        </div>
        <div className="main">
          <Header></Header>
          <Photo></Photo>
          {/* <techknowledge></techknowledge> */}
          <PersonalInfo></PersonalInfo>
          <Experience></Experience>
        </div>
      </div>
    </>
  )
}

export default App
