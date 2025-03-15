import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface TokenButtonProps {
  variant: "amber" | "sky";
}

export const SelectTokenButton: React.FC<TokenButtonProps> = ({ variant }) => {
  const baseClasses =
    "min-w-[180px] sm:min-w-[110px] md:min-w-[120px] flex items-center gap-2 sm:gap-1 px-2 sm:px-[6px] py-[4px] sm:py-[2px] h-[66px] sm:h-[33px] rounded-[12px] sm:rounded-[6px] text-base sm:text-xs md:text-sm font-medium whitespace-nowrap";
  const variantClasses: Record<TokenButtonProps["variant"], string> = {
    amber:
      "bg-amber-500/25 text-amber-500 hover:bg-amber-500/40 hover:text-amber-400 border-amber-500/15 border-[2px] sm:border-[1px]",
    sky: "bg-[#0EA5E9]/10 text-sky-500 hover:bg-[#0b466b] hover:text-sky-400 border-[#0EA5E9]/25 border-[2px] sm:border-[1px]",
  };

  return (
    <Button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} max-h-14 sm:max-h-7 sm:max-h-none`}
    >
      <span className="truncate">select token</span>
      <ChevronDown className="h-6 w-6 sm:h-3 sm:w-3 md:h-4 md:w-4 flex-shrink-0" />
    </Button>
  );
};
