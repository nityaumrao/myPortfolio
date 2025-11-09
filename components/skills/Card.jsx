import Hove from "../skills/Hover";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Card() {
  const skills = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces with components",
      link: "#"
    },
    {
      title: "JavaScript",
      description: "A versatile programming language for web development",
      link: "#"
    }
  ];

  return (
    <div className="inter-var">
      <HoverEffect items={skills} />
    </div>
  );
}
