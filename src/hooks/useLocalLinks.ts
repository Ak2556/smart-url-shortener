import { useEffect, useState } from "react";

export function useLocalLinks() {
  const [links, setLinks] = useState<{ short: string; original: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("smartLinks");
    if (stored) setLinks(JSON.parse(stored));
  }, []);

  const saveLink = (short: string, original: string) => {
    const newLinks = [{ short, original }, ...links].slice(0, 5);
    setLinks(newLinks);
    localStorage.setItem("smartLinks", JSON.stringify(newLinks));
  };

  return { links, saveLink };
}