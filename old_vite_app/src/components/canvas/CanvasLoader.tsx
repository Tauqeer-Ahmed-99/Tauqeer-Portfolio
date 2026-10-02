import { Html, useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <Progress value={progress} className="h-1 w-36" />
    </Html>
  );
};

export default CanvasLoader;
