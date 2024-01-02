import { useEffect, RefObject } from "react";

function useIntersectionObserver({
  ref,
  removeClass,
}: {
  ref: RefObject<HTMLElement>;
  removeClass?: boolean;
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
        } else if (removeClass) {
          // Удаляем класс
          entry.target.classList.remove("_watcher-view");
        }
      });
    }; // Создаем наблюдатель
    let observer = new IntersectionObserver(callback);

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
  }, [removeClass]); // Пустой массив зависимостей, чтобы запустить эффект один раз
}

export default useIntersectionObserver;
