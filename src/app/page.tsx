"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import URLShortenerForm from "../components/URLShortenerForm";
import ShortenedLink from "../components/ShortenedLink";
import Toast from "../components/Toast";
import { useClipboard } from "../hooks/useClipboard";
import { useLocalLinks } from "../hooks/useLocalLinks";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { copied, copyToClipboard } = useClipboard();
  const { links, saveLink } = useLocalLinks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !isValidUrl(url)) {
      alert("Please enter a valid URL.");
      return;
    }

    const suffix = Math.random().toString(36).substring(2, 8);
    const fullShort = `${window.location.origin}/${suffix}`;

    setShortUrl(fullShort);
    saveLink(fullShort, url);
  };

  const handleCopy = () => {
    copyToClipboard(shortUrl);
  };

  return (
    <main className="min-h-screen bg-[#111112] text-white pb-20">
      <Navbar />
      <HeroSection />
      <URLShortenerForm url={url} setUrl={setUrl} handleSubmit={handleSubmit} />

      {shortUrl && <ShortenedLink shortUrl={shortUrl} handleCopy={handleCopy} />}

      {copied && <Toast message="✅ Copied to clipboard!" />}

      {links.length > 0 && (
        <div className="max-w-xl mx-auto px-4 mt-10 space-y-2 text-sm text-gray-400">
          <h3 className="text-white text-base font-medium mb-2">Recent Short Links</h3>
          {links.map((link, i) => (
            <div
              key={i}
              className="flex justify-between items-center border border-gray-700 rounded px-3 py-2 bg-[#1f1f22]"
            >
              <a
                href={link.short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 truncate"
              >
                {link.short}
              </a>
              <span className="ml-4 text-gray-500 truncate max-w-[40%]">{link.original}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}