import React from "react";
import Option from "./Options";

import Hamburger from "../assets/Hamburger.svg";

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
          <div className="flex fixed top-[3vh] items-center gap-4 pb-4">
            <img src="#" alt="Logo" />
            <h2 className="text-2xl text-blue font-bold">STC PORTAL</h2>
          </div>
          <ul className="flex mx-5 mt-10 flex-col justify-evenly h-[40vh]">
            <Option label="Home" href="#" />
            <Option label="Tasks" href="#" />
            <Option label="Meetings" href="#" />
            <Option label="Teams" />
            <Option label="Polls" href="#" />
            <Option label="Members" href="/membersInformation" />
          </ul>
          <ul className="flex flex-col justify-evenly">
            <Option label="Admin Controls" href="/admin" />
          </ul>
          <div className="flex items-center gap-5 pb-4 md:fixed bottom-[3vh]">
            <div className="w-8 h-8 rounded-full bg-blue"></div>
            <h2 className="">Workspace</h2>
            <img alt="Down Arrow" />
          </div>
        </nav>
      </div>
    </div>
  );
}
