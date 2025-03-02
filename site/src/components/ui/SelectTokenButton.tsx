import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface TokenButtonProps {
  variant: "amber" | "sky";
}

export const SelectTokenButton: React.FC<TokenButtonProps> = ({ variant }) => {
  const baseClasses =
    "min-w-[120px] flex items-center gap-1 px-[6px] py-[3px] rounded-lg text-sm font-medium whitespace-nowrap";
  const variantClasses: Record<TokenButtonProps["variant"], string> = {
    amber:
      "bg-[#4F3917] text-amber-500 hover:bg-[#664616] hover:text-amber-400 border-[#614108] border-[1px]",
    sky: "bg-[#0E364E] text-sky-500 hover:bg-[#0b466b] hover:text-sky-400 border-[#082F49] border-[1px]",
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
