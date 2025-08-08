"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.scss";
import { SearchIcon } from "@/shared/icons/SearchIcon";
import { useMedia } from "@/shared/hooks/useMedia";

type SearchLink = { title?: string; url: string; keywords: string[] };
type FlatEntry = { keyword: string; url: string; title?: string };

// const POPULAR = [
//   "Брендинг",
//   "Web",
//   "Логотип",
//   "SMM",
//   "Сайты",
//   "Реклама",
//   "Дизайн",
// ];

export const SearchInp: React.FC<{
  onNavigate?: (url: string, keyword: string) => void;
  links: SearchLink[];
  popularLinks: SearchLink[];
}> = ({ onNavigate, links, popularLinks }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const isMobile = useMedia("(max-width: 768px)");

  const allEntries = useMemo<FlatEntry[]>(() => {
    const map = new Map<string, FlatEntry>();
    links.forEach((item) =>
      (item.keywords ?? []).forEach((kw) => {
        const k = String(kw).trim();
        if (!k) return;
        const key = k.toLowerCase();
        if (!map.has(key))
          map.set(key, { keyword: k, url: item.url, title: item.title });
      })
    );
    return Array.from(map.values());
  }, [links]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allEntries
      .filter((e) => e.keyword.toLowerCase().includes(q))
      .slice(0, 8);
  }, [allEntries, query]);

  // не закрываем по результатам — только сбрасываем выделение
  useEffect(() => {
    setActiveIdx(0);
  }, [results.length, query]);

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

  const hasQuery = query.trim().length > 0;
  const showEmpty = hasQuery && results.length === 0;

  return (
    <div className={styles.search}>
      <div ref={wrapRef} className={styles.wrap}>
        <div className={styles.box}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
            placeholder={
              isMobile.matches
                ? "Что вы хотите найти?"
                : "Введите название услуги, сферы деятельности или проекта"
            }
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

            {showEmpty && (
              <li className={`${styles.item} ${styles.empty}`}>
                По вашему запросу ничего не найдено
              </li>
            )}
          </ul>
        )}
      </div>

      {popularLinks.length > 0 && (
        <div className={styles.popular}>
          <div className={styles.popularTitle}>Популярные запросы:</div>
          <div className={styles.tags}>
            {popularLinks.map((tag) => (
              <button
                key={tag.url}
                type="button"
                onClick={() => {
                  setQuery(tag.title ?? "");
                  setOpen(true);
                  const match = allEntries.find(
                    (e) => e.keyword.toLowerCase() === tag.title?.toLowerCase()
                  );
                  if (match) commit(match);
                }}
                className={styles.tag}
              >
                {tag.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
