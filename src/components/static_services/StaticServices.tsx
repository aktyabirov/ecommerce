import React from "react";
import { images } from "@/constants/images";

const StaticServices = () => {
  return (
    <div className="container pt-4">
      <ul className="flex justify-between">
        <li className="bg-white px-8 gap-4  flex items-center">
          <div className="card-icon">
            <img src={images.DeliveryIcon.src} alt="" />
          </div>
          <div className="card-content">
            <h2 className="text-nowrap text-sm">FREE DELIVERY</h2>
            <p className="text-xs text-nowrap">For all oders over $120</p>
          </div>
        </li>
        <li className="bg-white px-8 py-4 flex gap-4 items-center">
          <div className="card-icon">
            <img src={images.PaymentIcon.src} alt="" />
          </div>
          <div className="card-content">
            <h2 className="text-nowrap text-sm">SAFE PAYMENT</h2>
            <p className="text-xs text-nowrap">100% secure payment</p>
          </div>
        </li>
        <li className="bg-white px-8 py-4 flex gap-4 items-center">
          <div className="card-icon">
            <img src={images.ShopIcon.src} alt="" />
          </div>
          <div className="card-content">
            <h2 className="text-nowrap text-sm">SHOP WITH CONFIDENCE</h2>
            <p className="text-xs text-nowrap">If goods have problems</p>
          </div>
        </li>
        <li className="bg-white px-8 py-4 flex gap-4 items-center">
          <div className="card-icon">
            <img src={images.HelpIcon.src} alt="" />
          </div>
          <div className="card-content">
            <h2 className="text-nowrap text-sm">24/7 HELP CENTER</h2>
            <p className="text-xs text-nowrap">Dedicated 24/7 support</p>
          </div>
        </li>
        <li className="bg-white px-8 py-4 flex gap-4 items-center">
          <div className="card-icon">
            <img src={images.ServiceIcon.src} alt="" />
          </div>
          <div className="card-content">
            <h2 className="text-nowrap text-sm">FRIENDLY SERVICES</h2>
            <p className="text-xs text-nowrap">30 day satisfaction guarantee</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StaticServices;
