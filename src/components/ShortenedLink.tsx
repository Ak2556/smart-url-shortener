"use client";

interface ShortenedLinkProps {
  shortUrl: string;
  handleCopy: () => void;
}

export default function ShortenedLink({ shortUrl, handleCopy }: ShortenedLinkProps) {
  return (
    <div className="max-w-xl mx-auto mt-6 px-4">
      <div className="flex items-center justify-between bg-[#1f1f22] border border-gray-700 rounded-md px-4 py-3">
        <span className="truncate text-blue-400">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </span>
        <button
          onClick={handleCopy}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-sm text-white font-medium py-1.5 px-4 rounded-md transition"
        >
          📋 Copy
        </button>
      </div>
    </div>
  );
}