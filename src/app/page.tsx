import Banner from "@/components/banner/Banner"
import { CategoryGrid } from "@/components/category/CategoryGrid"
import StaticServices from "@/components/static_services/StaticServices"
import StaticImage from '@/components/static_images/StaticImage'
import StaticImage2 from '@/components/static_images/StaticImage2'
import StaticImage4 from '@/components/static_images/StaticImage3'

import ComputerProductSection from '@/components/computers/ComputerProducts'
export default function Home() {

  return (
    <div className="bg-gray-100">
      <div className="hero-block">
        <Banner/>
        <StaticServices/>
        <StaticImage/>
        <CategoryGrid/>
        <StaticImage2/>
        <ComputerProductSection/>
        <StaticImage4/>
        </div>
    </div>
  )
}
