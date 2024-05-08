import Link from "next/link";
import React from "react";
import { images } from "@/constants/images";


const Footer = () => {
  return (
    <div className="bg-gray-600">
      <div>
        <div className="back-to-top py-4 bg-gray-500">
          <div className="container text-center">
            <Link className=" text-gray-100" href="/">
              Back to top
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="footer-links bg-gray-600 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 py-[30px]">
            <ul className="info text-gray-200 flex flex-col gap-2">
              <h2 className="font-bold pb-4">Company info</h2>
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Business with us</li>
              <li>Find a Store</li>
              <li>Press & Talent</li>
            </ul>
            <ul className="help text-gray-200 flex flex-col gap-2">
              <h2 className="font-bold pb-4">Let Us Help You</h2>
              <li>Orders</li>
              <li>Downloads</li>
              <li>Addresses</li>
              <li>Account details</li>
              <li>Lost password</li>
            </ul>
            <ul className="links text-gray-200 flex flex-col gap-2">
              <h2 className="font-bold pb-4">Quick Links</h2>
              <li>Special offers</li>
              <li>Gift cards</li>
              <li> F21 Red</li>
              <li> Privacy Policy</li>
              <li>Terms of use</li>
              <li>Portfolio</li>
            </ul>
            <ul className="info text-gray-200">
              <h2 className="font-bold pb-4">Company info</h2>
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Business with us</li>
              <li>Find a Store</li>
              <li>Press & Talent</li>
            </ul>
          </div>
        </div>  
          <div className="footer-partners">
            <div className="bg-gray-900">
              <div className="container flex justify-between py-3">
                <div className="text-gray-100 flex text-xs gap-3">
                  <p>Copyright © 2019 amera Theme by Lionthemes88 | </p>
                  <a href="#">Site Map</a>
                  <a href="#">Search Terms</a>
                  <a href="#">Advanced search</a>
                  <a href="#">Contact us</a>
                </div>
                <div>
                    <img src={images.Paypal.src} alt="#" />
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;
