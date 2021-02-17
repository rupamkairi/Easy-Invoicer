import React from "react";

export default function NavBar() {
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-wrap">
          <a href="/">
            <p className="text-4xl font-black text-gray-900">Easy Invoicer</p>
          </a>
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap">
            <div className="flex justify-start container py-4 md:py-0">
              <a
                href="/"
                className="mx-2 text font-semibold text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="/"
                className="mx-2 text font-semibold text-gray-500 hover:text-gray-900"
              >
                FAQ
              </a>
              <a
                href="/"
                className="mx-2 text font-semibold text-gray-500 hover:text-gray-900"
              >
                Testimonials
              </a>
            </div>
            <div className="flex justify-between container pb-2 md:pb-0">
              <button className="mx-2 py-2 px-4 text-sm font-medium rounded shadow-lg hover:shadow-xl border border-gray-500 hover:border-gray-900 bg-gray-500 hover:bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-gray-200 whitespace-nowrap">
                Try For Free
              </button>
              <button className="mx-2 py-2 px-4 text-sm font-medium rounded hover:shadow-xl border-2 border-gray-500 hover:border-gray-900 hover:bg-gray-900 text-gray-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 whitespace-nowrap">
                Pre Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
