import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillTwitterSquare, AiOutlineYoutube } from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
      <section className="section1 flex justify-around items-center bg-black text-white p-7">
        <div className="text-section flex flex-col justify-start items-start">
          <p className="text-2xl font-bold p-2">Subscribe Newsletter</p>
          <p> Subscribe newsletter to get 50% on all products.</p>
        </div>
        <form action="" className="formsection flex gap-5">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="p-2 rounded-lg bg-white text-sm text-black outline"
          />
          <button className="bg-blue-500 p-2 rounded-lg">Subscribe</button>
        </form>
        <div className="icon-section flex gap-5 text-2xl">
          <div className="thirdlistitem">
            <TiSocialInstagram />
          </div>
          <div className="thirdlistitem">
            <AiFillTwitterSquare />
          </div>
          <div className="thirdlistitem">
            <AiOutlineYoutube />
          </div>
        </div>
      </section>
      <div className="line w-full bg-amber-50 h-[1px] "></div>
      <section
        className="section1 md:flex block md:justify-around justify-center
     items-center bg-black text-white p-7">
        <img src="capitalImages/logo2.png" alt="" className="mx-auto md:mx-0" />
        <ul className="md:block flex gap-2 justify-around items-center">
          <li> SHOP MEN</li>
          <li>Clothing </li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Shoes</li>
        </ul>
        <ul className="hidden md:block">
          <li> SHOP MEN</li>
          <li>Clothing </li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Shoes</li>
        </ul>
        <ul className="hidden md:block">
          <li> SHOP MEN</li>
          <li>Clothing </li>
          <li>Winter</li>
          <li>Summer</li>
          <li>Shoes</li>
        </ul>
      </section>
      <div className="line w-full bg-amber-50 h-[1px] "></div>
      <section>
        <p className="section1 flex text-center justify-around items-center bg-black text-white p-4">
          Copyright 2022 All rights reserved ❤❤ This template is made withby
          Colorlib
        </p>
      </section>
    </div>
  );
}
