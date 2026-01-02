"use client";

import { useParallax } from "@/hooks/use-parallax";
import React, { use } from "react";

const FloatingShapes = () => {
  const scrollY = useParallax();
  const shapes = [
    {
      id: 1,
      size: "w-72 h-72",
      postion: "top-20 left-10",
      gradient: "from-indigo-500 to-purple-700",
    },
    {
      id: 2,
      size: "w-96 h-96",
      postion: "top-1/3 right-10",
      gradient: "from-sky-400 to-indigo-600",
    },
    {
      id: 3,
      size: "w-64 h-64",
      postion: "bottom-20 left-1/4",
      gradient: "from-fuchsia-500 to-pink-600",
    },
    {
      id: 4,
      size: "w-80 h-80",
      postion: "bottom-1/3 right-1/4",
      gradient: "from-emerald-400 to-cyan-500",
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointers-events-none">
      {shapes.map((shape) => {
        return (
          <div
            key={shape.id}
            className={`absolute ${shape.size} ${shape.postion} bg-gradient-to-r ${shape.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotate(${
                scrollY * 0.1
              }deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingShapes;
