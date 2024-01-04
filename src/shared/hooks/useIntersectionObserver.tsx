import { useEffect, RefObject, MutableRefObject } from "react";

function useIntersectionObserver({
  ref,
  refs,
  removeClass,
  margin = "0px",
  once = false,
  threshold = 0,
}: {
  ref?: RefObject<HTMLElement>;
  refs?: MutableRefObject<HTMLDivElement | null>[];
  removeClass?: boolean;
  margin?: string;
  once?: boolean;
  threshold?: number;
}) {
  useEffect(() => {
    let elements: HTMLElement[] = [];

    // Заполняем массив elements в зависимости от того, передан ли один ref или массив refs
    if (ref) {
      elements.push(ref.current!);
    } else if (refs) {
      refs.forEach((r) => {
        if (r && r.current) {
          elements.push(r.current);
        }
      });
    }

    // Функция обратного вызова
    let callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Если элемент видим
        if (entry.isIntersecting) {
          // Добавляем класс
          entry.target.classList.add("_watcher-view");

          if (once) {
            // Если once = true, прекращаем наблюдение после первого пересечения
            observer.unobserve(entry.target);
          }
        } else if (removeClass) {
          // Удаляем класс
          entry.target.classList.remove("_watcher-view");
        }
      });
    };

    // Создаем наблюдатель
    let observer = new IntersectionObserver(callback, {
      rootMargin: margin,
      threshold: threshold,
    });

    // Начинаем наблюдение для каждого элемента
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Очистка при размонтировании
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [margin, removeClass, refs, ref, once, threshold]);
}

export default useIntersectionObserver;
