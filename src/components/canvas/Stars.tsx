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

const Stars = ({ height, ...props }: any) => {
  const ref: any = useRef(null!);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(7000), { radius: 1.2 })
  );

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    if (ref.current.offsetHeight) {
      ref.current.offsetHeight = height;
    }
  }, [height]);

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
      const updateHeight = () => setHeight(childrenRef.current?.offsetHeight);

      // Create a ResizeObserver to watch for height changes
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(childrenRef.current);

      // Initial height setup
      updateHeight();

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div ref={childrenRef}>{children}</div>
      <div
        className="w-full absolute inset-0 z-[-1] top-[100vh]"
        style={{ height }}
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={<CanvasLoader />}>
            <Stars height={height} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default StarsCanvas;
