import React, { useState } from "react";
import { Link } from "react-router-dom";

import { validPhoneNumber } from "./RegEx";

export default function Signup() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(true);

  const validate = () => {
    if (!validPhoneNumber.test(phone)) {
      setError(true);
      setDisable(true);
    } else {
      setError(false);
      setDisable(false);
    }
  };

  return (
    <div className="flex place-content-center bg-[#fff5e1]">
      <div className="max-w-sm flex flex-col place-content-center h-screen">
        <h5 className="text-[2rem] text-[#32594a] font-bold text-center">
          Login
        </h5>

        <input
          placeholder="Enter phone number here"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-10 py-4 mt-4 border-2 border-[#32594a] rounded-md"
        />

        {error && (
          <p className="flex justify-center text-red-500">
            Enter a valid phone number
          </p>
        )}

        <Link to="/otp" className="flex w-full justify-center">
          <button
            className="bg-[#32594a] p-4 mt-2"
            onClick={validate}
            disabled={disable}
          >
            <h2 className="text-[#fff5e1]">Login</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}
