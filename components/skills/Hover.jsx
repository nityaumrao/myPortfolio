import { HoverEffect } from "../ui/basicCard";

export function Hover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}