import React from 'react'
import './index.css'
import Navbar from '../../component/navbar'
import HeaderTitle from '../../component/header'
import InfoContainer from '../../component/container/info-container'
import SpeakerCard from '../../component/card'
import Footer from '../../component/footer'

function Home () {
  return (
    <div>
      <HeaderTitle/>
      <Navbar/>
      <InfoContainer/>
      <SpeakerCard/>
      <Footer/>
    </div>
  )
}

export default Home