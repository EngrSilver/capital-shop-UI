import React from 'react';

export default function Hero() {
  return (
    <div className="hero bg-[fff8dd] md:bg-[url('./capitalImages/ladyblue.png')] h-[500px] bg-left bg-no-repeat bg-cover flex">
      <div className="ladySection hidden md:block  w-[50%] "></div>
      <div className="otherSection flex flex-col justify-center items-center p-[2rem]">
        <p className="text-[1.3rem] mb-5 font-semibold text-red-600">
          fashion sale
        </p>
        <h2 className="text-[2rem] font-bold mb-[3rem]">Minimal Menz Style</h2>
        <p className="text-center mb-[3rem] max-md:w-[80%] w-[70%]">
          Consectetur adipisicing elit.labroum fuga incidunt laboriosam voluplas
          iure delectus digmissimos facilis neque nulla earum.
        </p>
        <button className="p-5 bg-green-800 text-white rounded-md cursor-pointer font-bold">
          {' '}
          SHOP-NOW
        </button>
      </div>
    </div>
  );
}
