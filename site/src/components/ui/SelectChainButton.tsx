import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const SelectChainButton: React.FC = () => (
  <button
    type="button"
    className="flex items-center space-x-2 px-1 py-1.5 rounded-lg bg-[#627eea]"
  >
    <Image
      src="/tokens/mono/ETH.svg"
      alt="Ethereum"
      width={20}
      height={20}
      className="w-5 h-5"
    />
    <ChevronDown className="h-3 w-3 text-white" />
  </button>
);

export default SelectChainButton;
