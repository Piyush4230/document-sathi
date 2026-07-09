"use client";

import { useEffect, useState } from "react";

type Props = {
  slug: string;
};

export default function BookmarkButton({ slug }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setSaved(items.includes(slug));
  }, [slug]);

  const toggleBookmark = () => {
    const items: string[] = JSON.parse(
      localStorage.getItem("bookmarks") || "[]"
    );

    if (items.includes(slug)) {
      const updated = items.filter((item) => item !== slug);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setSaved(false);
    } else {
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...items, slug])
      );
      setSaved(true);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      className="rounded-lg border px-4 py-2 transition hover:bg-slate-100"
    >
      {saved ? "⭐ Saved" : "☆ Save"}
    </button>
  );
}