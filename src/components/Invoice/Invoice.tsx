import React from "react";
import SenderForm from "./SenderForm";

export default function Invoice() {
  return (
    <div className="h-96 relative">
      <div className="absolute w-full h-full -top-8 px-2">
        <div className="container mx-auto bg-white rounded shadow-md">
          <SenderForm />
        </div>
      </div>
    </div>
  );
}
