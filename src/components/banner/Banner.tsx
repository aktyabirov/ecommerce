import * as React from "react"
import GetBanners from "@/service/getBanners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Navigation } from "./Navigation";

export default async function Banner() {
  try {
    const { results } = await GetBanners(); 
    return (
      <div className="flex container">
        <div className="side-nav pt-5 pr-6">
            <Navigation/>
        </div>
        <div className="carousel pt-4">
          <Carousel className="w-full relative">
            <CarouselContent>
              {results.map((banner) => (
                <CarouselItem key={banner.id}>
                  <div className="p-1">
                    <img
                      src={banner.image}
                      alt={banner.title} 
                      className="w-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[50%] left-[1%]"  />
            <CarouselNext className="absolute top-[50%] left-[96%]" />
          </Carousel>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch banners:", error);
    return <div>Failed to fetch banners!</div>;
  }
}
