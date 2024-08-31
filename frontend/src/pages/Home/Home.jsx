import React from 'react'
import Header from '../../components/Header/Header'
import BMICalculator from '../../components/BMICalculator/BMICalculator'
import GymVideos from '../../components/GymVideos/GymVideos'
import Footer from '../../components/Footer/Footer'
import ContactUs from '../../components/ContactUs/ContactUs'

const Home = () => {
  return (
    <div>
      <Header/>
      <GymVideos/>
      <BMICalculator/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home