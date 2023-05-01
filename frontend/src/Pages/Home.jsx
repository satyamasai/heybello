import React from 'react'
import SimpleSlider from '../Components/Slider/SimpleSlider'
import Trending from '../Components/Trending/Trending'
import PopularBrands from '../Components/PopularBrands/PopularBrands'
import Footer from '../Components/Footer/Footer'
import Features from '../Components/Features/Features'

const Home = () => {
  return (
    <div className='home'>
    <SimpleSlider/>
    <PopularBrands/>
    <Trending/>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Home