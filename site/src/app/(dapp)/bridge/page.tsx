"use client";

import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { AssetBox } from "@/components/ui/AssetBox";
import { TokenInputGroup } from "@/components/ui/TokenInputGroup";
import { SwapInterface } from "@/components/ui/SwapInterface";
import { TokenSwitch } from "@/components/ui/TokenSwitch";
import { isStoreHydrated, useHydrationCheck } from "@/utils/chainMethods";

const BridgeComponent: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(!isStoreHydrated());

  // Get hydration check function
  const checkHydration = useHydrationCheck();

  // Check if the store has hydrated and update loading state
  useEffect(() => {
    // If already hydrated, skip the check
    if (!isLoading) return;

    // Otherwise, check for hydration
    const waitForHydration = async () => {
      await checkHydration();
      setIsLoading(false);
    };

    waitForHydration();
  }, [isLoading, checkHydration]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAmount(e.target.value);
  };

  const settingsButton = (
    <button>
      <Settings className="h-5 w-5 text-zinc-400 hover:text-zinc-50 transition-colors" />
    </button>
  );

  // If the store isn't hydrated yet, show a minimal loading state
  if (isLoading) {
    return (
      <div className="flex h-full w-full items-start justify-center sm:pt-[6vh] pt-[2vh] min-h-[500px]">
        <div className="w-full max-w-md opacity-50">
          {/* Same UI structure, but with reduced opacity until hydration completes */}
          <SwapInterface
            actionButton={{
              text: "Loading...",
              iconName: "Cable",
              disabled: true,
            }}
          >
            <AssetBox title="send" showSettings={true} showChainSelector={true}>
              <TokenInputGroup
                variant="amber"
                amount=""
                showSelectToken={true}
              />
            </AssetBox>
            <AssetBox
              title="receive"
              showSettings={false}
              showChainSelector={true}
            >
              <TokenInputGroup
                variant="sky"
                amount=""
                readOnly={true}
                showSelectToken={false}
              />
            </AssetBox>
          </SwapInterface>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-start justify-center sm:pt-[6vh] pt-[2vh] min-h-[500px]">
      <div className="w-full max-w-md">
        <SwapInterface
          actionButton={{
            text: "bridge",
            iconName: "Cable",
            disabled: !amount || amount === "0",
          }}
        >
          {/* Send Box */}
          <AssetBox
            title="send"
            showSettings={true}
            settingsComponent={settingsButton}
            showChainSelector={true}
            boxType="source"
          >
            <TokenInputGroup
              variant="amber"
              amount={amount}
              onChange={handleAmountChange}
              showSelectToken={true}
            />
          </AssetBox>

          <TokenSwitch />

          {/* Receive Box */}
          <AssetBox
            title="receive"
            showSettings={false}
            showChainSelector={true}
            boxType="destination"
          >
            <TokenInputGroup
              variant="sky"
              amount=""
              readOnly={true}
              showSelectToken={false}
            />
          </AssetBox>
        </SwapInterface>
      </div>
    </div>
  );
};

export default BridgeComponent;
