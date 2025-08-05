import { useEffect, useState } from 'react';

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

    listener();
    window.addEventListener('scroll', listener);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, [ids, offset]);

  return activeId;
}