import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface TokenButtonProps {
  variant: "amber" | "sky";
}

export const SelectTokenButton: React.FC<TokenButtonProps> = ({ variant }) => {
  const baseClasses =
    "min-w-[120px] flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap";
  const variantClasses: Record<TokenButtonProps["variant"], string> = {
    amber:
      "bg-amber-500/20 text-amber-500 hover:bg-amber-500/50 hover:text-amber-400 border-[#D97706] border-[0.5px]",
    sky: "bg-sky-500/20 text-sky-500 hover:bg-sky-500/50 hover:text-sky-400 border-[#0EA5E9] border-[0.5px]",
  };

  return (
    <Button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span>select token</span>
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
};
