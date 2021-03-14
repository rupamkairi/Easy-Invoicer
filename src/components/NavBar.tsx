import React from "react";
import Button from "./General/Button";
import Input from "./General/Textbox";

export default function NavBar() {
  return (
    <div className="bg-indigo-100 shadow-md">
      <div className="mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-wrap">
          <a href="/">
            <p className="text-4xl font-black text-indigo-700">Easy Invoicer</p>
          </a>
          <div className="w-full md:w-auto flex justify-center items-center flex-wrap md:flex-nowrap">
            <div className="w-full md:w-auto flex justify-start py-4 md:py-0"></div>
            <div className="w-full md:w-auto flex justify-between pb-2 md:pb-0">
              <Button
                value="Try For Free"
                onClick={() => console.log("button click")}
              />
              <Button outline value="Pre Register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
