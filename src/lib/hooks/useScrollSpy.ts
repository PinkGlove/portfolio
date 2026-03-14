import { useEffect, useState } from 'react';

function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  delayMs: number
): T & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastRun = 0;

  const throttled = (...args: unknown[]) => {
    const now = Date.now();
    const elapsed = now - lastRun;

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (elapsed >= delayMs) {
      lastRun = now;
      fn(...args);
    } else {
      timeoutId = setTimeout(() => {
        lastRun = Date.now();
        timeoutId = null;
        fn(...args);
      }, delayMs - elapsed);
    }
  };

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttled as T & { cancel: () => void };
}

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = rect.top + scroll - offset;
          const bottom = rect.bottom + scroll - offset;

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => {
          return scroll >= top && scroll < bottom;
        });

      setActiveId(position?.id || '');
    };

    const throttledScroll = throttle(listener, 100);
    const throttledResize = throttle(listener, 200);

    listener();
    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledResize);
      throttledScroll.cancel();
      throttledResize.cancel();
    };
  }, [ids, offset]);

  return activeId;
}
