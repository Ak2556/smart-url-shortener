import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copyToClipboard };
}