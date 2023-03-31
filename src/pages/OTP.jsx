import React from "react";
import { Link } from "react-router-dom";

export default function OTP() {
  return (
    <div className="flex place-content-center bg-[#fff5e1]">
      <div className="max-w-sm flex flex-col place-content-center h-screen">
        <h5 className="text-[2rem] text-[#32594a] font-bold text-center">
          Enter OTP
        </h5>
        <form>
          <input
            placeholder="Enter OTP here"
            className="px-10 py-4 mt-4 border-2 border-[#32594a] rounded-md"
          />

          <Link to="/dashboard" className="flex w-full justify-center">
            <button className="bg-[#32594a] p-4 mt-2">
              <h2 className="text-[#fff5e1]">Submit</h2>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
