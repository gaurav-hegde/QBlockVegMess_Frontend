import React from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="flex place-content-center bg-[#fff5e1]">
        <div className="max-w-sm flex flex-col place-content-center h-screen">
          <h5 className="text-[2rem] text-[#32594a] font-bold text-center">
            Dashboard
          </h5>
        </div>
      </div>
    </div>
  );
}
