import React from "react";
import SenderForm from "./SenderForm";

export default function Invoice() {
  return (
    <div className="h-96 relative">
      <div className="absolute w-full h-full -top-8 p-2">
        <div className="container mx-auto bg-white rounded shadow-md">
          <div className="container grid grid-cols-3 p-2 md:p-4 lg:p-4 xl:p-8">
            <div className="col-span-3 md:col-span-2 my-4">
              <div className="border-b py-8">
                <SenderForm />
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 my-4">
              <div className="border-b py-8">
                <SenderForm />
              </div>
            </div>
            <div className="col-span-3 my-4">
              <div className="h-56 rounded-xl shadow-xl bg-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
