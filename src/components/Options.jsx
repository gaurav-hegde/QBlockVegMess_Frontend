import React from "react";
import { Link } from "react-router-dom";

export default function Option(props) {
  let active = props.href && window.location.pathname.search(props.href) !== -1;
  return (
    <button className="">
      <li
        className={
          "p-5 rounded-xl text-grey-600 font-semibold border-2" +
          (active ? "bg-[#f4f2fe]" : "")
        }
      >
        <Link to={props.href} className="flex gap-4">
          {props.label}
        </Link>
      </li>
    </button>
  );
}
