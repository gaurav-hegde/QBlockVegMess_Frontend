import React, { useState } from "react";
import { Link } from "react-router-dom";

import Farmer from "../assets/Farmer.svg";
import logo from "../assets/logo.svg";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [error] = useState("");

  function handleSubmit() {
    fetch("http://172.17.232.233:80/otp", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ "phoneNumber": "+91" + phone }),
    });
  }
  // const validate = () => {
  //   if (!validPhoneNumber.test(phone)) {
  //     setError(true);
  //     setDisable(true);
  //   } else {
  //     setError(false);
  //     setDisable(false);
  //   }
  // };

  return (
    <div className="grid grid-cols-5 bg-[#82C426]">
      <div className="col-span-2 flex items-end justify-center">
        <div className="flex flex-col place-content-center h-screen">
          <h5 className="text-[3rem] text-white font-bold text-center">
            Amruth
          </h5>
          <h1 className="text-[1.5rem] text-white font-bold text-center">
            Go Organic
          </h1>
          <img className="h-[40rem]" src={Farmer} alt="Farmer" />
        </div>
      </div>
      <div className="col-span-3">
        <div className="px-64 place-content-center border-2 rounded-l-3xl bg-white">
          <div className="flex flex-col place-content-center h-screen">
            <img className="h-[10rem]" src={logo} alt="logo" />
            <h5 className="my-4 text-[2rem] text-[#32594a] font-bold text-center">
              Login
            </h5>

            <h1 className="mt-4 font-bold">Phone Number</h1>
            <input
              placeholder="Enter phone number here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-2 py-2 mt-2 border-2 border-[#32594a] rounded-md w-full"
            />

            {error && (
              <p className="flex justify-center text-red-500">
                Enter a valid phone number
              </p>
            )}

            <Link to= {{pathname: "/otp", state: {phone} }} className="mt-8 flex w-full justify-center mt-4">
              <button
                className="w-full px-10 py-2 mt-2 rounded-md bg-[#82C426] p-4 mt-2"
                onClick={handleSubmit}
                // disabled={disable}
              >
                <h2 className="text-[#fff5e1]">Login</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
}
