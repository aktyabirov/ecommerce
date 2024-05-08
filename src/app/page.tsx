import Banner from "@/components/banner/Banner"
import { CategoryGrid } from "@/components/category/CategoryGrid"
import StaticServices from "@/components/static_services/StaticServices"
export default function Home() {

  return (
    <div className="bg-gray-100">
      <div className="hero-block">
        <Banner/>
        <StaticServices/>
        <CategoryGrid/>
        </div>
    </div>
  )
}
