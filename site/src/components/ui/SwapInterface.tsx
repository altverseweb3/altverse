import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { BrandedButton } from "@/components/ui/BrandedButton";

// Use a string literal type for the icon names
type AvailableIconName =
  | "Coins"
  | "Link"
  | "ArrowRightLeft"
  | "Repeat"
  | "Network";

interface SwapInterfaceProps {
  children: ReactNode;
  actionButton: {
    text: string;
    iconName: AvailableIconName;
    onClick?: () => void;
    disabled?: boolean;
  };
  className?: string;
}

export function SwapInterface({
  children,
  actionButton,
  className = "",
}: SwapInterfaceProps) {
  return (
    <Card className={`w-full bg-zinc-900 border-zinc-800 ${className}`}>
      <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-6">
        {children}
        <BrandedButton
          buttonText={actionButton.text}
          iconName={actionButton.iconName}
          onClick={actionButton.onClick}
          disabled={actionButton.disabled}
          className="mt-2 sm:mt-3 h-10 sm:h-auto"
        />
      </CardContent>
    </Card>
  );
}

export default SwapInterface;
