import React from "react";
import wheat from "../assets/wheat_transparent_crop.png";

export default function Home() {
  return (
    <div className="flex place-content-center bg-[#fff5e1]">
      <div className="max-w-sm flex flex-col place-content-center h-screen">
        <img
          src={wheat}
          alt="wheat"
          className="h-[18rem] w-[12rem] place-self-center bg-[#fff5e1]"
        />
        <h5 className="text-[2rem] text-[#32594a] font-bold text-center">
          Welcome Farmers!
        </h5>
        <button className="bg-[#32594a] p-4 mt-2">
          <h2 className="text-[#fff5e1]">Log In</h2>
        </button>
      </div>
    </div>
  );
}
