"use client";

import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";
import { LandingBackground } from "@/components/ui/LandingBackground";
import ShimmerButton from "@/components/ui/ShimmerButton";
import { Zap, Globe, HandCoins, Layers, LucideIcon } from "lucide-react";
import { GlobeCard } from "@/components/ui/GlobeCard";
import { ReactNode } from "react";
import Tiles from "@/components/ui/Tiles";
import Spider from "@/components/ui/Spider";
import BlurIn from "@/components/ui/BlurIn";
import EarnCard from "@/components/ui/EarnCard";

interface Feature {
  name: string;
  description: string;
  className: string;
  icon: "Zap" | "Globe" | "HandCoins" | "Layers";
  background?: ReactNode;
}

const features: Feature[] = [
  {
    name: "Swap & Bridge Across Chains",
    description:
      "Swap and bridge intra-chain/cross-chain at optimal rates. Near-Instant operations powered by Wormhole.",
    className: "col-span-1 md:col-span-3 md:row-span-1",
    icon: "Zap",
    background: <Spider />,
  },
  {
    name: "Completely Decentralized",
    description: "No central entities. Fully smart-contract based.",
    className: "col-span-1 md:col-span-2 md:row-span-1",
    icon: "Globe",
    background: <GlobeCard />,
  },
  {
    name: "Earn",
    description:
      "Access top-yielding protocols for farming, lending, and borrowing locally and across chains.",
    className: "col-span-1 md:col-span-2 md:row-span-1",
    icon: "HandCoins",
    background: <EarnCard />,
  },
  {
    name: "Cross-Chain & Cross-Environment",
    description:
      "Access Ethereum, Solana, Sui, and other popular L1s/L2s and associated protocols seamlessly.",
    className: "col-span-1 md:col-span-3 md:row-span-1",
    icon: "Layers",
    background: <Tiles />,
  },
];

type IconMap = {
  [key in Feature["icon"]]: LucideIcon;
};

const iconMap: IconMap = {
  Zap: Zap,
  Globe: Globe,
  HandCoins: HandCoins,
  Layers: Layers,
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      <LandingBackground />
      <div className="w-full max-w-5xl mx-auto px-4 md:px-4 py-3 relative z-10">
        <div className="flex flex-col items-center">
          <Link href="/about" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-1 px-3 py-1 mb-4 mt-4 rounded-full bg-gray-500/10 text-gray-400/80 hover:bg-amber-500/30 hover:text-white/90 duration-300 text-xs font-semibold border border-gray-500/20 hover:border-amber-500/20">
              <span className="opacity-70">✨</span>
              <span>Learn More →</span>
            </button>
          </Link>
          <div className="text-center mb-6">
            <BlurIn
              word="Altverse: The Unified Crypto Interface"
              className="bg-gradient-to-br from-white from-80% to-white/1 bg-clip-text 
                        my-4
                        text-4xl lg:text-[42px]
                        font-light
                        leading-none tracking-tighter 
                        text-transparent text-balance translate-y-[-0.6rem] pointer-events-none"
              duration={2}
            />
            <Link href="/swap">
              <ShimmerButton
                className="h-12 shadow-2xl"
                shimmerColor="rgb(256 158 11)"
                shimmerSize="0.12em"
                shimmerDuration="2.5s"
                background="black"
              >
                <span className="whitespace-pre-wrap px-8 text-center text-base font-semibold leading-none tracking-tight text-white">
                  Get Started
                </span>
              </ShimmerButton>
            </Link>
          </div>
          <BentoGrid className="w-full grid-cols-1 md:grid-cols-5 gap-6 md:auto-rows-[min(340px,33vh)] sm:mb-0 mb-4">
            {features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <BentoCard
                  key={feature.name}
                  {...feature}
                  Icon={IconComponent}
                  background={feature.background}
                />
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
