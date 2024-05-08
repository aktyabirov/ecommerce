import React from 'react'
import { images } from '@/constants/images'

const StaticImage4 = () => {
  return (
    <div className='container pt-4'>
        <div id='demo15' className='flex justify-between hover15 column'>
            <figure><img src={images.Banner16.src} alt="banner" /></figure>
            <figure><img src={images.Banner17.src} alt="banner" /></figure>
            <figure> <img src={images.Banner18.src} alt="banner" /></figure>
        </div>
    </div>
  )
}

export default StaticImage4