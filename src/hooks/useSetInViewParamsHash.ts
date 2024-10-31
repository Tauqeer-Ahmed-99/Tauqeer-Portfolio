import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const useSetInViewParamsHash = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        navigate(`#${ref.current?.id}`);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref.current]);

  return ref;
};

export default useSetInViewParamsHash;
