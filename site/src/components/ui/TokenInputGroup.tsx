import React from "react";
import { SelectTokenButton } from "@/components/ui/SelectTokenButton";
import { TokenAmountInput } from "@/components/ui/TokenAmountInput";

interface TokenInputGroupProps {
  variant: "amber" | "sky";
  amount: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showSelectToken: boolean;
  dollarValue?: string;
  readOnly?: boolean;
}

export function TokenInputGroup({
  variant,
  amount,
  onChange,
  showSelectToken,
  dollarValue = "$0.00",
  readOnly = false,
}: TokenInputGroupProps) {
  return (
    <div className="flex justify-between items-start gap-2 sm:gap-4 w-full">
      {showSelectToken && (
        <div className="-mt-[6px] sm:-mt-[8px] md:-mt-[10px]">
          <SelectTokenButton variant={variant} />
        </div>
      )}
      <TokenAmountInput
        amount={amount}
        onChange={onChange}
        dollarValue={dollarValue}
        readOnly={readOnly}
      />
    </div>
  );
}

export default TokenInputGroup;
