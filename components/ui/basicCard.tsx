"use client";
import Image from "next/image";

interface TechItem {
  icon: string;
  name: string;
}

interface TechCategoryCardProps {
  title: string;
  items: TechItem[];
}

export default function TechCategoryCard({ title, items }: TechCategoryCardProps) {
  return (
    <div className="bg-black text-white p-6 rounded-2xl border border-gray-800 shadow-lg max-w-md">
      <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <span className="inline-block w-5 h-5 bg-white/10 rounded-lg"></span>
        {title}
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center hover:bg-white/10 p-2 rounded-xl transition"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={36}
              height={36}
              className="mb-1"
            />
            <span className="text-xs text-gray-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
