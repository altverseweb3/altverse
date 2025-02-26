import { ChevronDown } from "lucide-react";

interface TokenButtonProps {
  variant: "amber" | "sky";
}

export const SelectTokenButton: React.FC<TokenButtonProps> = ({ variant }) => {
  const baseClasses =
    "min-w-[120px] flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap";
  const variantClasses: Record<TokenButtonProps["variant"], string> = {
    amber:
      "bg-branded-primary/25 text-branded-primary hover:bg-branded-primary/30 border-branded-primary border-[0.5px]",
    sky: "bg-branded-secondary/20 text-branded-secondary hover:bg-branded-secondary/30 border-branded-secondary border-[0.5px]",
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span>select token</span>
      <ChevronDown className="h-4 w-4" />
    </button>
  );
};
