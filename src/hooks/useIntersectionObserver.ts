import { MutableRefObject, useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  root?: Element;
  rootMargin?: string;
}
type HookReturnType = [MutableRefObject<null>, IntersectionObserverEntry?];
export function useIntersectionObserver(options: Options={}): HookReturnType {
  const { threshold = 1.0, root = null, rootMargin = "0px" } = options;
  const targetRef = useRef(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  function callbackFn(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setEntry(entry);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, {
      threshold,
      root,
      rootMargin,
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return function () {
      if (targetRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  return [targetRef, entry];
}
