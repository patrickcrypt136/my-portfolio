"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-600"
      />
      <input
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-600"
      />
      <textarea
        placeholder="Your message"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-gray-600 resize-none"
      />
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p className="text-green-400 text-sm">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
    </div>
  );
}