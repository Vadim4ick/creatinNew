import { useEffect, RefObject } from "react";

function useIntersectionObserver({
  ref,
  removeClass,
  margin = "0px",
  once = false,
  threshold = 0,
}: {
  ref: RefObject<HTMLElement>;
  removeClass?: boolean;
  margin?: string;
  once?: boolean;
  threshold?: number;
}) {
  useEffect(() => {
    // Получаем элемент из ref
    let element = ref.current;

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
    }; // Создаем наблюдатель
    let observer = new IntersectionObserver(callback, {
      rootMargin: margin,
      threshold: threshold,
    });

    // Начинаем наблюдение
    if (element) {
      observer.observe(element);
    }

    // Очистка при размонтировании
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [margin, removeClass]); // Пустой массив зависимостей, чтобы запустить эффект один раз
}

export default useIntersectionObserver;
