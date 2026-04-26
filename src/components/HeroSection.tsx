import React from "react";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Flower2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-20">
      <Button variant={"outline"} className="rounded-full mb-5">
        <Zap />
        next.js+shade/ui
      </Button>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5">
          Build beautiful apps {""}
          <span className="text-blue-500">
            faster <br /> than ever
          </span>
        </h1>
        <p className="w-96 m-auto text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae pariatur
          officia aut voluptatem animi quas eligendi, labore facilis neque minus
          necessitatibus.
        </p>
      </div>
      <div className="flex gap-4 m-5">
        <Button>
          Get Started
          <ArrowRight />
        </Button>

        <Button variant={"outline"}>
          View on GitHub
          <Flower2 />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
