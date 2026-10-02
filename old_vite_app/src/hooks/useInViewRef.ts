import { useRef } from "react";
import { useInView } from "framer-motion";

const useInViewRef = (config?: {
  once?: boolean;
}): [React.MutableRefObject<null>, boolean] => {
  const ref = useRef(null);
  const inView = useInView(ref, config);

  return [ref, inView];
};

export default useInViewRef;
