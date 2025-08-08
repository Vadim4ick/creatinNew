"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.scss";
import { SearchIcon } from "@/shared/icons/SearchIcon";

type SearchLink = {
  title?: string;
  url: string;
  keywords: string[];
};

const MOCK_DATA: SearchLink[] = [
  {
    title: "Брендинг",
    url: "/services/branding",
    keywords: ["брендинг", "бренд", "айдентика", "фирстиль"],
  },
  {
    title: "Веб-разработка",
    url: "/services/web",
    keywords: ["web", "сайты", "лендинг", "frontend", "backend"],
  },
  {
    title: "Логотип",
    url: "/services/logo",
    keywords: ["логотип", "лого", "знак", "эмблема"],
  },
  {
    title: "SMM",
    url: "/services/smm",
    keywords: ["smm", "соцсети", "таргет", "контент-план"],
  },
  {
    title: "Реклама",
    url: "/services/ads",
    keywords: ["реклама", "контекст", "ads", "баннеры"],
  },
  {
    title: "Дизайн",
    url: "/services/design",
    keywords: ["дизайн", "ui", "ux", "макеты"],
  },
];

const POPULAR = [
  "Брендинг",
  "Web",
  "Логотип",
  "SMM",
  "Сайты",
  "Реклама",
  "Дизайн",
];

type FlatEntry = { keyword: string; url: string; title?: string };

function flatten(data: SearchLink[]): FlatEntry[] {
  const set = new Map<string, FlatEntry>();
  data.forEach((item) => {
    item.keywords.forEach((kw) => {
      const key = kw.toLowerCase();
      if (!set.has(key)) {
        set.set(key, { keyword: kw, url: item.url, title: item.title });
      }
    });
  });
  return Array.from(set.values());
}

const allEntries = flatten(MOCK_DATA);

export const SearchInp: React.FC<{
  onNavigate?: (url: string, keyword: string) => void;
}> = ({ onNavigate }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allEntries
      .filter((e) => e.keyword.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    setActiveIdx(0);
    setOpen(results.length > 0);
  }, [results]);

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, []);

  const commit = (entry?: FlatEntry) => {
    const chosen = entry ?? results[activeIdx];
    if (!chosen) return;
    setOpen(false);
    setQuery(chosen.keyword);
    onNavigate?.(chosen.url, chosen.keyword);
  };

  const highlight = (text: string, q: string) => {
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <mark>{text.slice(idx, idx + q.length)}</mark>
        {text.slice(idx + q.length)}
      </>
    );
  };

  return (
    <div className={styles.search}>
      <div ref={wrapRef} className={styles.wrap}>
        <div className={styles.box}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length && setOpen(true)}
            placeholder="Введите название услуги, сферы деятельности или проекта"
            className={styles.input}
          />

          <button onClick={() => commit()} className={styles.btn}>
            <SearchIcon />
          </button>
        </div>

        {open && (
          <ul className={styles.list}>
            {results.map((r, i) => (
              <li
                key={r.keyword + r.url}
                className={`${styles.item} ${
                  i === activeIdx ? styles.active : ""
                }`}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseDown={() => commit(r)}
              >
                <span className={styles.keyword}>
                  {highlight(r.keyword, query)}
                </span>
                {r.title && <span className={styles.title}>{r.title}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.popular}>
        <div className={styles.popularTitle}>Популярные запросы:</div>
        <div className={styles.tags}>
          {POPULAR.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setQuery(tag);
                const match = allEntries.find(
                  (e) => e.keyword.toLowerCase() === tag.toLowerCase()
                );
                if (match) commit(match);
              }}
              className={styles.tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
