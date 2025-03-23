import { Button } from "@/components/ui/Button";
import { ArrowUpDown } from "lucide-react";

export function TokenSwitch() {
  return (
    <div className="h-0 relative">
      <Button
        variant="outline"
        size="icon"
        className="h-[1.75rem] w-[2.5rem] rounded-[3px] bg-[#1B1B1F] border-[#09090B] border-[1.5px] p-0 shadow-sm absolute left-1/2 top-[-1px] -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <ArrowUpDown className="h-[0.75rem] w-[0.75rem] text-[#A1A1A1]" />
      </Button>
    </div>
  );
}

export default TokenSwitch;
