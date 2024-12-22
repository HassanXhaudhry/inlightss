import React from "react";
import { Footer } from "flowbite-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <Footer>
      <div className="w-full bg-[#0d1849f7] text-white font-poppins p-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex flex-col gap-6 items-start justify-center">
            <a
              href=""
              className="text-2xl font-semibold flex items-center gap-3 space-x-1"
            >
              <img src={logo} alt="" className="w-9" />
              <span className="text-3xl">Orinix</span>
            </a>
            <div className="mt-4 flex space-x-6 sm:mt-0 text-xs sm:justify-center">
              <Footer.Icon href="#" icon={FaXTwitter} className="text-white" />
              <Footer.Icon href="#" icon={FaFacebookF} className="text-white" />
              <Footer.Icon
                href="#"
                icon={FaLinkedinIn}
                className="text-white"
              />
            </div>
            <Footer.Copyright
              href="#"
              by="Orinix Reserved™"
              year={2024}
              className="py-8"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="Product" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Landingpage</Footer.Link>
                <Footer.Link href="#">Features</Footer.Link>
                <Footer.Link href="#">Documentation</Footer.Link>
                <Footer.Link href="#">Referral Program</Footer.Link>
                <Footer.Link href="#">Pricing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Documentation</Footer.Link>
                <Footer.Link href="#">Design</Footer.Link>
                <Footer.Link href="#">Themes</Footer.Link>
                <Footer.Link href="#">Illustrations</Footer.Link>
                <Footer.Link href="#">UI Kit</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Terms</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="More" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Documentation</Footer.Link>
                <Footer.Link href="#">License</Footer.Link>
                <Footer.Link href="#">Changelog</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
