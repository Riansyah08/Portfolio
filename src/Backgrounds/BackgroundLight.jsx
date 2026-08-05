import { DotPattern } from "../components/ui/dot-pattern.jsx";
import { cn } from "@/lib/utils";

export default function BackgroundLight() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "opacity-70"
        )}
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1.2}
      />

      {/* Optional subtle animated glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl animate-pulse"
          style={{
            top: "-200px",
            left: "-150px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)",
            animationDuration: "10s",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-pulse"
          style={{
            bottom: "-150px",
            right: "-150px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06), transparent 70%)",
            animationDuration: "14s",
            animationDelay: "2s",
          }}
        />
      </div>
    </div>
  );
}