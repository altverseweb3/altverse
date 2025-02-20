"use client";

import React, { useState, ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowDownUp, Coins, Settings } from "lucide-react";
import { BrandedSelect } from "@/components/ui/BrandedSelect";
// import { BrandedNumericInput } from "@/components/ui/BrandedNumericInput";

interface SwapContainerProps {
  children: ReactNode;
  className?: string;
}

const SwapContainer = ({ children, className = "" }: SwapContainerProps) => (
  <div className={`relative bg-zinc-800 rounded-2xl p-4 ${className}`}>
    {children}
  </div>
);

const SwapComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSwap = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
      <Card className="w-full max-w-md mx-4 bg-zinc-900 border-zinc-800 p-4 rounded-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Swap</h2>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-zinc-300"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="space-y-2 p-0">
          {/* Source Container */}
          <SwapContainer>
            <div className="flex justify-end mb-2">
              <BrandedSelect
                placeholder="Chain"
                onChange={(chain) => console.log(chain)}
                className="w-24 h-8"
              />
            </div>
            <div className="flex items-center justify-between">
              <BrandedSelect
                variant="colored"
                placeholder="Select token"
                onChange={(token) => console.log(token)}
                className="w-1/3"
              />
              <div className="text-right">
                <input
                  type="number"
                  placeholder="0"
                  className="bg-transparent text-right text-3xl w-full focus:outline-none"
                />
                <div className="text-zinc-400 text-sm">$0.00</div>
              </div>
            </div>
          </SwapContainer>

          {/* Swap Direction Indicator */}
          <div className="flex justify-center -my-4 relative z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800 hover:bg-zinc-700 h-10 w-10"
            >
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>

          {/* Destination Container */}
          <SwapContainer className="pt-6">
            <div className="flex justify-end mb-2">
              <BrandedSelect
                placeholder="Chain"
                onChange={(chain) => console.log(chain)}
                className="w-24 h-8"
              />
            </div>
            <div className="flex items-center justify-between">
              <BrandedSelect
                placeholder="Select token"
                onChange={(token) => console.log(token)}
                className="w-1/3"
              />
              <div className="text-right">
                <input
                  type="number"
                  placeholder="0"
                  className="bg-transparent text-right text-3xl w-full focus:outline-none"
                  readOnly
                />
                <div className="text-zinc-400 text-sm">$0.00</div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                className="w-full bg-amber-500/25 hover:bg-amber-500/50 text-amber-500 border-amber-500 border-[0.5px] rounded-lg leading-zero text-sm"
                onClick={handleSwap}
                disabled={isLoading}
              >
                {isLoading ? "swapping..." : "swap"}
                <Coins className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </SwapContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SwapComponent;
