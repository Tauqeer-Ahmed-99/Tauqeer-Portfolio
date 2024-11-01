import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

const useSetInViewParamsHash = () => {
  const ref = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const newRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        navigate(`${search}#${newRef?.id}`);
      }
    });

    if (newRef) {
      observer.observe(newRef);
    }

    return () => {
      if (newRef) {
        observer.unobserve(newRef);
      }
    };
  }, [navigate, search]);

  return ref;
};

export default useSetInViewParamsHash;
