import React from 'react'
import { images } from '@/constants/images'

const StaticImage = () => {
  return (
    <div className='container pt-4'>
        <div id='demo15' className='flex justify-between hover15 column'>
            <figure><img src={images.Banner11.src} alt="banner" /></figure>
            <figure><img src={images.Banner12.src} alt="banner" /></figure>
            <figure> <img src={images.Banner13.src} alt="banner" /></figure>
        </div>
    </div>
  )
}

export default StaticImage