import React from "react";

interface BalanceDisplayProps {
  balance: string;
  tokenSymbol?: string;
  className?: string;
}

export function BalanceDisplay({
  balance,
  tokenSymbol = "",
  className = "",
}: BalanceDisplayProps) {
  // Make sure rounded-md is always applied, regardless of className
  const baseClasses =
    "h-6 flex items-center justify-start p-2 text-amber-500 text-xs bg-[#4F3917] border border-[#61410B] border-opacity-50 rounded-[3px] whitespace-nowrap";

  return (
    <div
      className={`${baseClasses} ${className}`}
      title={`balance: ${balance}${tokenSymbol ? ` ${tokenSymbol}` : ""}`}
    >
      balance: {balance}
      {tokenSymbol ? ` ${tokenSymbol}` : ""}
    </div>
  );
}

export default BalanceDisplay;
