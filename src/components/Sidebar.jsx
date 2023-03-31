import React from "react";
import Option from "./Options";

import Hamburger from "../assets/Hamburger.svg";
import Wheat from "../assets/wheat_transparent_crop.png";

export default function Sidebar() {
  return (
    <div className="h-0 flex item-end justify-end">
      <button className="absolute z-30 lg:hidden peer top-2 right-2 h-10 w-10 rounded-full transition mb-[660px]">
        <span className="text-white">
          <img src={Hamburger} alt="Hamburger" />
        </span>
      </button>
      <div
        className="z-20 fixed top-0 -left-96 lg:left-0 h-full w-64 bg-white 
          peer-focus:left-0 peer:transition ease-out delay-150 duration-200 lg:transition duration-0 shadow-xl"
      >
        <nav className="p-8 flex flex-col justify-evenly h-screen">
          <div className="flex fixed top-[3vh] items-center pb-4">
            <img src={Wheat} alt="Logo" className="h-28" />
            <h2 className="text-[2rem] text-green font-bold">Amruth</h2>
          </div>
          <ul className="flex mx-5 mt-10 flex-col justify-evenly h-[40vh]">
            <button className="border-b-2 border-green p-4">
              <li>Home</li>
            </button>
            <button className="border-b-2 border-green p-4">
              <li>Suggestions</li>
            </button>
            <button className="border-b-2 border-green p-4">
              <li>Stats</li>
            </button>
          </ul>

          <div className="flex items-center gap-5 pb-4 md:fixed bottom-[3vh]">
            <div className="bg-green rounded-md">
              <button className="p-6">
                <h3 className="text-off">Contact Distributors</h3>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
