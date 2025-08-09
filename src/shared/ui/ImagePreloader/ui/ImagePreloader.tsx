"use client";
import Image, { ImageProps } from "next/image";
import React, { useMemo, useState } from "react";
import styles from "./style.module.scss";

type BaseProps = {
  /** Обёртка */
  wrapperClassName?: string;
  /** Класс для <Image/> */
  className?: string;
  /** Класс для скелетона */
  skeletonClassName?: string;
  /** Показать скелетон до полной загрузки (по умолчанию true) */
  showSkeleton?: boolean;
  /** Соотношение сторон контейнера (например "16/9" или 1.777) */
  aspectRatio?: string | number;
  /** Режим объекта: cover | contain */
  objectFit?: "cover" | "contain";
  /** Кастомный fallback-URL при ошибке загрузки */
  fallbackSrc?: string;
  /** Колбэк после успешной загрузки */
  onLoaded?: () => void;
};

type Props = Omit<ImageProps, "fill"> &
  BaseProps & {
    /** Если true — используем fill-режим. Иначе — ширина/высота из props */
    fill?: boolean;
  };

export function ImagePreloader({
  src,
  alt = "",
  priority,
  blurDataURL,
  placeholder,
  sizes = "100vw",
  quality,
  unoptimized,
  fill = true,
  width,
  height,
  wrapperClassName,
  className,
  skeletonClassName,
  showSkeleton = true,
  aspectRatio, // например: 16/9 или "4/3"
  objectFit = "cover",
  fallbackSrc,
  onLoaded,
  ...imgProps
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);

  const arStyle = useMemo(() => {
    if (!aspectRatio) return undefined;
    const ratio =
      typeof aspectRatio === "number"
        ? aspectRatio
        : Number(aspectRatio.split("/")[0]) / Number(aspectRatio.split("/")[1]);
    // для не-fill режима подгонять ratio не нужно — размеры заданы явно
    return fill
      ? ({ ["--ip-aspect" as any]: ratio } as React.CSSProperties)
      : undefined;
  }, [aspectRatio, fill]);

  const finalSrc = err && fallbackSrc ? fallbackSrc : src;

  return (
    <div
      className={`${styles.imgWrap} ${wrapperClassName || ""}`}
      style={arStyle}
    >
      {showSkeleton && !loaded && (
        <div
          className={`${styles.skeleton} ${skeletonClassName || ""}`}
          aria-hidden
        />
      )}

      <Image
        src={finalSrc}
        alt={alt}
        {...(fill ? { fill: true } : { width, height })}
        sizes={sizes}
        priority={priority}
        quality={quality}
        unoptimized={unoptimized}
        placeholder={blurDataURL ? "blur" : placeholder}
        blurDataURL={blurDataURL}
        onLoadingComplete={() => {
          setLoaded(true);
          onLoaded?.();
        }}
        onError={() => {
          if (fallbackSrc && !err) {
            setErr(true); // повторный рендер с fallback
          } else {
            setLoaded(true); // скрыть скелетон даже при ошибке, если fallback нет
          }
        }}
        className={[
          styles.image,
          loaded ? styles.imageVisible : "",
          className || "",
          objectFit === "contain" ? styles.contain : styles.cover,
        ].join(" ")}
        {...imgProps}
      />
    </div>
  );
}
