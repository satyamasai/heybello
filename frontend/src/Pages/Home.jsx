import React from 'react'
import SimpleSlider from '../Components/Slider/SimpleSlider'
import Trending from '../Components/Trending/Trending'
import PopularBrands from '../Components/PopularBrands/PopularBrands'

const Home = () => {
  return (
    <div className='home'>
    <SimpleSlider/>
    <PopularBrands/>
    <Trending/>
    </div>
  )
}

export default Home