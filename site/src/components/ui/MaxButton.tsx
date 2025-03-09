import React from "react";

interface MaxButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function MaxButton({
  onClick,
  disabled = false,
  className = "",
}: MaxButtonProps) {
  // Make sure rounded-md is always applied, regardless of className
  const baseClasses =
    "h-6 p-2 text-xs text-amber-500 bg-[#4F3917] border border-[#61410B] border-opacity-50 hover:bg-amber-500/50 hover:text-amber-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-[3px] flex items-center justify-center";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      max
    </button>
  );
}

export default MaxButton;
