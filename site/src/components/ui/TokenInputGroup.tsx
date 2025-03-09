import React from "react";
import { SelectTokenButton } from "@/components/ui/SelectTokenButton";
import { TokenAmountInput } from "@/components/ui/TokenAmountInput";
import { BalanceDisplay } from "@/components/ui/BalanceDisplay";
import { MaxButton } from "@/components/ui/MaxButton";

interface TokenInputGroupProps {
  variant: "amber" | "sky";
  amount: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dollarValue?: string;
  readOnly?: boolean;
  tokenBalance?: string;
  tokenSymbol?: string;
  onMaxClick?: () => void;
}

export function TokenInputGroup({
  variant,
  amount,
  onChange,
  dollarValue = "$0.00",
  readOnly = false,
  tokenBalance = "100.00",
  tokenSymbol = "",
  onMaxClick,
}: TokenInputGroupProps) {
  return (
    <div className="w-full">
      {/* First row with Token Button and Amount Input */}
      <div className="flex w-full items-center">
        {/* Token selection with height matching amount input + dollar value */}
        <div className="w-[30%] max-w-[120px] h-[31px] flex">
          <div className="w-full self-stretch">
            <SelectTokenButton
              variant={variant}
              className="self-stretch flex-grow"
            />
          </div>
        </div>

        {/* Amount input */}
        <div className="w-[70%] ml-2 sm:ml-4">
          <TokenAmountInput
            amount={amount}
            onChange={onChange}
            dollarValue={dollarValue}
            readOnly={readOnly}
          />
        </div>
      </div>

      {/* Second row with balance and max button */}

      <div className="flex w-full mt-[6px] items-center">
        <div className="w-[30%] max-w-[120px] flex">
          {!readOnly && (
            <BalanceDisplay
              balance={tokenBalance}
              tokenSymbol={tokenSymbol}
              className="w-full"
            />
          )}
        </div>
        <div className="w-[70%] my-0 ml-2 sm:ml-4 flex justify-end">
          {!readOnly && <MaxButton onClick={onMaxClick} disabled={readOnly} />}
        </div>
      </div>
    </div>
  );
}

export default TokenInputGroup;
