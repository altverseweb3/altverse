import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface TokenButtonProps {
  variant: "amber" | "sky";
  className?: string;
}

export const SelectTokenButton: React.FC<TokenButtonProps> = ({
  variant,
  className = "",
}) => {
  const baseClasses =
    "w-full h-[31px] min-w-[90px] sm:min-w-[110px] md:min-w-[120px] flex items-center justify-between pl-3 pr-1 py-0 sm:px-[6px] rounded-[6px] text-xs sm:text-sm font-medium whitespace-nowrap";
  const variantClasses: Record<"amber" | "sky", string> = {
    amber:
      "bg-amber-500/25 text-amber-500 hover:bg-amber-500/40 hover:text-amber-400 border-amber-500/15 border-[1px]",
    sky: "bg-[#0EA5E9]/10 text-sky-500 hover:bg-[#0b466b] hover:text-sky-400 border-[#0EA5E9]/25 border-[1px]",
  };

  return (
    <Button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="truncate">select token</span>
      <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
    </Button>
  );
};
