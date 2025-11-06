"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/char";
export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var" containerClassName="py-2">
      <CardBody className="bg-[url(/char.png)] bg-cover animate-in fade-in-0 duration-5000 ">
        <CardItem translateZ="100" className="w-full pl-25 mt-8">
          <img
            src="/laptop.png"
            height="500"
            className="h-50 mt-40 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

      </CardBody>
    </CardContainer>
  );
}
