"use client";

interface URLShortenerFormProps {
  url: string;
  setUrl: (url: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function URLShortenerForm({ url, setUrl, handleSubmit }: URLShortenerFormProps) {
  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto w-full px-4 space-y-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        placeholder="Enter your long URL"
        className="w-full px-5 py-3 rounded-md bg-[#1f1f22] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
  type="submit"
  className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] focus:ring-2 focus:ring-blue-400 transition-transform duration-150 font-semibold"
>
  Shorten URL
</button>
    
    </form>
  );
}