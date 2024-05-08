import React from 'react'
import { images } from '@/constants/images'

const StaticImage2 = () => {
  return (
    <div className='container pt-4'>
        <div id='demo15' className='flex justify-between hover15 column'>
            <figure><img src={images.Banner14.src} alt="banner" /></figure>
            <figure><img src={images.Banner15.src} alt="banner" /></figure>
        </div>
    </div>
  )
}

export default StaticImage2