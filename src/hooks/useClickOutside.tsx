import { useEffect, RefObject, useCallback } from "react";

export default function useClickOutside<T extends HTMLElement>(
  containerRef: RefObject<T> | Array<RefObject<T>>,
  onClick: () => void,
  conditional?: boolean
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (conditional) return;
      let isElement: boolean | null | undefined = true;
      if (Array.isArray(containerRef)) {
        const indexElement = containerRef.findIndex(
          (item) =>
            item?.current && item?.current?.contains(event.target as Node)
        );
        isElement = indexElement > -1;
      } else {
        isElement =
          containerRef?.current &&
          containerRef?.current?.contains(event.target as Node);
      }

      if (!isElement) {
        if (onClick) onClick();
      }
    },
    [containerRef, conditional, onClick]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);
}
