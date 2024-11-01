/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useRef,
  Suspense,
  PropsWithChildren,
  useEffect,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import CanvasLoader from "./CanvasLoader";
import { useSearchParams } from "react-router-dom";

const Stars = (props: any) => {
  const ref: any = useRef(null!);
  const [searchParams] = useSearchParams();
  const starsCount = searchParams.get("starsCount") ?? "4000";
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(parseInt(starsCount)), { radius: 1.2 }),
  );

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ children }: PropsWithChildren) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (childrenRef.current) {
      const updateSize = () => {
        setHeight(childrenRef.current?.offsetHeight);
      };

      // Create a ResizeObserver to watch for height changes
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(childrenRef.current);

      // Initial height setup
      updateSize();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div ref={childrenRef}>{children}</div>
      <div className="absolute inset-0 z-[-1] top-[100vh]" style={{ height }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={<CanvasLoader />}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default StarsCanvas;
