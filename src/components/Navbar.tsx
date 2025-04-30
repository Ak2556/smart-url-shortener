"use client";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 border-b border-white/10 backdrop-blur bg-black/30 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-semibold">🔗 SmartURL</h1>
        <nav className="space-x-6 text-sm text-white/70 font-medium">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Dashboard</a>
        </nav>
      </div>
    </header>
  );
}