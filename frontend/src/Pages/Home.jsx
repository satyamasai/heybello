import React from 'react'
import SimpleSlider from '../Components/Slider/SimpleSlider'
import Trending from '../Components/Trending/Trending'
import PopularBrands from '../Components/PopularBrands/PopularBrands'
import Footer from '../Components/Footer/Footer'
import Features from '../Components/Features/Features'
import UpperBorder from '../Components/UpperBorder/UpperBorder'

const Home = () => {
  return (
    <div className='home'>
    <UpperBorder/>
    <SimpleSlider/>
    <PopularBrands/>
    <Trending/>
    <Features/>
    
    </div>
  )
}

export default Home