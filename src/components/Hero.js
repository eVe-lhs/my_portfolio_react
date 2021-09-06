import React from "react";

export default function Hero() {
  return (
    <div className="relative flex-1 flex justify-evenly w-full my-3 lg:my-0 p-5">
      <div className="flex-1 my-auto mx-5">
        <h2 className="md:text-6xl text-4xl">Its Lin Htet Swe </h2>
        <p className="md:text-base mt-4 text-lg hidden md:block">
          A Computer Science Student, a wanna be web-developer and passionate in
          gaming and football
        </p>
      </div>
      <div className="flex-1 m-auto">
        <img
          className=" h-full float-right"
          src="https://images.unsplash.com/photo-1611265434135-3828a571338d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
          alt="lhs"
        />
      </div>
    </div>
  );
}
