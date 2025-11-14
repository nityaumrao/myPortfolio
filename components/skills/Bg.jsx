import { Particles } from "@/components/ui/skills_bg";
import Card from "@/components/skills/Card";

export default function Background() {
  return (
    <div className="relative h-screen bg-[#E8F9FF] overflow-hidden flex items-center">
      {/* Interactive particles */}
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={100}
        staticity={100}
        color="#0a0524ff"
        size={0.8}
      />
      <Card/>
    </div>
  );
}