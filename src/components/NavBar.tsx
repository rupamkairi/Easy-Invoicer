import React from "react";

export default function NavBar() {
  return (
    <div className="bg-indigo-100 shadow-md">
      <div className="mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-wrap">
          <a href="/">
            <p className="text-4xl font-black text-indigo-600">Easy Invoicer</p>
          </a>
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap">
            <div className="flex justify-start container py-4 md:py-0">
              <a
                href="/"
                className="mx-2 text-sm font-semibold text-indigo-400 hover:text-indigo-600"
              >
                Features
              </a>
              <a
                href="/"
                className="mx-2 text-sm font-semibold text-indigo-400 hover:text-indigo-600"
              >
                FAQ
              </a>
              <a
                href="/"
                className="mx-2 text-sm font-semibold text-indigo-400 hover:text-indigo-600"
              >
                Testimonials
              </a>
            </div>
            <div className="flex justify-between container pb-2 md:pb-0">
              <button className="mx-2 py-2 px-4 text-sm font-medium rounded shadow-lg hover:shadow-xl border border-indigo-500 hover:border-indigo-600 bg-indigo-500 hover:bg-indigo-600 text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-200 whitespace-nowrap">
                Try For Free
              </button>
              <button className="mx-2 py-2 px-4 text-sm font-medium rounded hover:shadow-xl border-2 border-indigo-400 hover:border-indigo-600 hover:bg-indigo-600 text-indigo-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-200 whitespace-nowrap">
                Pre Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
