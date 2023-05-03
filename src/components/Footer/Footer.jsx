import React from "react";
import icon from '../../../image/meatball.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-3 md:p-10 mt-32 flex justify-around bg-sky-200 text-base-content">
        <div>
          <img className="w-20" src={icon} alt="" />
          <p className="font-extrabold text-xl">
            Recipes Corner</p>
            <p className="font-semibold">Best Recipe Website From 2020</p>
        </div>
        <div>
          <span className="font-bold text-xl">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-xl">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="font-bold text-xl">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
