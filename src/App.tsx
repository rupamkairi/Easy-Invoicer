import React from "react";
//
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Invoice from "./components/Invoice/Invoice";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Invoice />
      <Features />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
