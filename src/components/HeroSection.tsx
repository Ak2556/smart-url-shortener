"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Smart URL Shortener
      </h1>
      <p className="text-gray-400 text-base sm:text-lg">
        A simple and efficient tool to shorten your URLs — fast, free, and copy-ready.
      </p>
    </section>
  );
}