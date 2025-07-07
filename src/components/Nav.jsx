import React, { useEffect, useRef, useState } from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';
import { AiFillTwitterSquare, AiOutlineYoutube } from 'react-icons/ai';
import { IoSearchSharp } from 'react-icons/io5';
import { IoIosContacts } from 'react-icons/io';
import { TbShoppingCartPin } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  const bottomNavRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hamclicked, sethamclicked] = useState(false);

  const handlehamclicked = () => {
    sethamclicked((prev) => !prev);
    console.log(hamclicked);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-1px',
      }
    );

    if (bottomNavRef.current) {
      observer.observe(bottomNavRef.current);
    }

    return () => {
      if (bottomNavRef.current) {
        observer.unobserve(bottomNavRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="topNav w-full md:flex bg-red-100 p-1 px-7 justify-between items-center m-auto font-bold block h-14">
        <ul className="firstlist flex justify-around lg:w-[50%] w-[100%]">
          <li className="listitem">About Us</li>
          <li className="listitem">Privacy</li>
          <li className="listitem">FAQS</li>
          <li className="listitem">Career</li>
        </ul>
        <ul className="hidden md:flex text-blue-600 gap-4 border-l-2 border-r-black pl-2.5">
          <li className="secondlistitem">My WishList</li>
          <li className="secondlistitem">My trackholder</li>
        </ul>
        <ul className="hidden md:flex gap-1.5 border-l-2 border-r-black pl-2.5">
          <li className="thirdlistitem">
            <FaSquareFacebook />
          </li>
          <li className="thirdlistitem">
            <TiSocialInstagram />
          </li>
          <li className="thirdlistitem">
            <AiFillTwitterSquare />
          </li>
          <li className="thirdlistitem">
            <AiOutlineYoutube />
          </li>
        </ul>
      </div>

      <div ref={bottomNavRef}></div>

      <div
        className={`bottomNav w-full flex md:justify-between justify-around items-center bg-red-100 p-1 px-7 shadow-md h-14 transition-all duration-300 ${
          isSticky ? 'fixed top-0 z-50 shadow-lg' : ''
        }`}>
        <div className="cursor-pointer">
          <img src="capitalImages/logo2.png" alt="" />
        </div>
        <ul className="md:flex hidden justify-between items-center w-[70%]">
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Baby Collection</li>
          <li>Page</li>
          <li>Blog</li>
          <IoSearchSharp />
          <IoIosContacts />
          <TbShoppingCartPin />
        </ul>
        <GiHamburgerMenu
          className="md:hidden text-2xl text-red-600 cursor-pointer"
          onClick={() => handlehamclicked()}
        />
      </div>
      <ul
        className={`flex flex-col md:hidden bg-gray-400 text-center justify-center items-center shadow-md font-semibold transition-all duration-300 ease-in-out origin-top transform overflow-hidden ${
          hamclicked
            ? 'scale-y-100 max-h-[500px] py-3'
            : 'scale-y-0 max-h-0 py-0'
        }`}>
        <div className="flex justify-center gap-4 mt-2 text-xl">
          <IoSearchSharp />
          <IoIosContacts />
          <TbShoppingCartPin />
        </div>
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Baby Collection</li>
        <li>Page</li>
        <li>Blog</li>
      </ul>

      {/* Spacer to prevent layout jump when sticky */}
      <div className="mt-14">
        <p className="bg-black text-[.8rem] md:text-lg text-white text-center px-3 py-3">
          Sales Up To 50% Biggest Discount. Hurry! Limited Period Offer Shop now
        </p>
      </div>
    </div>
  );
}
