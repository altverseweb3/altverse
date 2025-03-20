import { ArrowUpDown } from "lucide-react";
import { NeonGradientCard } from "@/components/ui/NeonGradientCard";
import { cn } from "@/lib/utils";

export function TokenSwitch() {
  return (
    <div className="h-0 relative">
      <div className="absolute left-1/2 top-[-1px] -translate-x-1/2 -translate-y-1/2 z-20">
        <NeonGradientCard
          borderSize={1.5}
          borderRadius={3}
          neonColors={{
            firstColor: "#F59E0B",
            secondColor: "#0EA5E9",
          }}
          className={cn(
            "h-[1.75rem] w-[2.5rem] overflow-visible",
            "[&>div]:p-0",
            "[&>div]:after:opacity-30",
            "[&>div]:after:blur-[4px]",
          )}
        >
          <div className="flex items-center justify-center h-full w-full bg-[#1B1B1F]">
            <ArrowUpDown className="h-[0.75rem] w-[0.75rem] text-[#A6A6A6]" />
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
}

export default TokenSwitch;
