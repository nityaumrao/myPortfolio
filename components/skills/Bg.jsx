import { Particles } from "@/components/ui/skills_bg";
import Card from "@/components/skills/Card";

export default function Background() {
  return (
    <div className="relative h-screen bg-[#C4E1E6] overflow-hidden flex items-center">
      {/* Interactive particles */}
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={100}
        staticity={100}
        color="#332D56"
        size={0.8}
      />
      <div className="relative z-10 w-1/2 pl-10">
        <Card />
      </div>
    </div>
  );
}