import React from "react";
import { Link } from "react-router-dom";
import wheat from "../assets/wheat_transparent_crop.png";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 bg-[#fff5e1]">
        <div className="flex place-content-center col-span-2">
          <div className="max-w-md flex flex-col place-content-center h-screen">
            <img
              src={wheat}
              alt="wheat"
              className="h-[16rem] w-[10rem] place-self-center bg-[#fff5e1]"
            />
            <h5 className="text-[2rem] text-[#32594a] font-bold text-center">
              Welcome Farmers!
            </h5>
            <Link to="/signup" className="flex w-full justify-center">
              <button className="bg-[#32594a] p-4 mt-2">
                <h2 className="text-[#fff5e1]">Log In</h2>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-full h-32 bg-">fkjghdlsk</div>
        </div>
      </div>
    </>
  );
}
