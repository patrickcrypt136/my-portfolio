"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

 useEffect(() => {
    console.log("before timeout");
    setTimeout(() => {
      console.log("setting visible true");
      setVisible(true);
    }, 100);
  }, []);

  const item = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section className="max-w-5xl mx-auto px-6 py-28">
      <p style={item(0)} className="text-blue-400 text-sm font-medium mb-4 tracking-widest uppercase">
        Available for work
      </p>

      <h1 style={item(0.2)} className="text-5xl font-bold tracking-tight mb-6 leading-tight">
        Hi, I'm Patrick Kelvin <br />
        <span className="text-gray-400">Full Stack Developer</span>
      </h1>

      <p style={item(0.4)} className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
        I build fast, clean, and user-friendly web applications. Focused on JavaScript, React, and Next.js — currently exploring Web3.
      </p>

      <div style={item(0.6)} className="flex gap-4">
        <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
          View Projects
        </a>
        <a href="#contact" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-lg text-sm font-medium transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  );
}