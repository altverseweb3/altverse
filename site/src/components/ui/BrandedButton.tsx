import React, { ButtonHTMLAttributes } from "react";
import { Button } from "@/components/ui/Button";
import * as LucideIcons from "lucide-react";

// Type for all available Lucide icon names
type LucideIconName = keyof typeof LucideIcons;

// Props interface extending HTML button attributes
interface BrandedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: LucideIconName;
  buttonText: string;
  className?: string;
}

export function BrandedButton({
  iconName,
  buttonText,
  className = "",
  ...props
}: BrandedButtonProps) {
  // Type assertion to ensure TypeScript understands this is a valid component
  const IconComponent = LucideIcons[iconName] as React.ElementType;

  return (
    <Button
      className={`w-full bg-amber-500/25 hover:bg-amber-600/50 text-amber-500 border-amber-500 border-[0.5px] rounded-lg leading-zero text-lg ${className}`}
      {...props}
    >
      <IconComponent className="h-6 w-6 mr-2" />
      {buttonText}
    </Button>
  );
}

export default BrandedButton;
