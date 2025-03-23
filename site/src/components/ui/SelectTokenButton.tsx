"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  StyledDialogClose,
} from "@/components/ui/StyledDialog";
import { Token, getWalletTokens, getAllTokens } from "@/config/tokens";

interface SelectTokenButtonProps {
  variant: "amber" | "sky";
  onTokenSelect?: (token: Token) => void;
  selectedToken?: Token;
}

export const SelectTokenButton: React.FC<SelectTokenButtonProps> = ({
  variant,
  onTokenSelect,
  // selectedToken,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [walletTokens, setWalletTokens] = useState<Token[]>([]);
  const [allTokens, setAllTokens] = useState<Token[]>([]);

  // Load tokens on mount
  useEffect(() => {
    setWalletTokens(getWalletTokens());
    setAllTokens(getAllTokens());
  }, []);

  // Filter tokens based on search query
  const filteredWalletTokens = walletTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredAllTokens = allTokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.address.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Handle token selection
  const handleSelectToken = (token: Token) => {
    if (onTokenSelect) {
      onTokenSelect(token);
    }
    setIsOpen(false);
  };

  // More consistent base classes with better mobile sizing
  const baseClasses =
    "min-w-[100px] sm:min-w-[110px] md:min-w-[120px] flex items-center justify-between gap-2 px-2 py-2 sm:py-2 rounded-[6px] text-[1rem] font-medium whitespace-nowrap";

  const variantClasses: Record<SelectTokenButtonProps["variant"], string> = {
    amber:
      "bg-amber-500/25 text-amber-500 hover:bg-amber-500/40 hover:text-amber-400 border-amber-500/15 border-[1px] text-sm sm:text-base",
    sky: "bg-[#0EA5E9]/10 text-sky-500 hover:bg-[#0b466b] hover:text-sky-400 border-[#0EA5E9]/25 border-[1px] text-sm sm:text-base",
  };

  // Format address to show first 4 and last 4 characters
  const formatAddress = (address: string) => {
    if (!address) return "";
    if (address.length <= 8) return address;
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4,
    )}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className={`${baseClasses} ${variantClasses[variant]} h-[2rem] sm:h-[2.25rem]`}
        >
          <span className="truncate">select token</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 flex-shrink-0"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[480px] p-0 bg-[#18181B] border-[#1C1C1E] rounded-[6px] overflow-hidden"
        showCloseButton={false}
      >
        <div className="px-4 pt-4 flex justify-between items-center">
          <h3 className="text-lg font-medium text-[#FAFAFA]">token select</h3>
          <StyledDialogClose className="bg-[#442E0B] rounded-[3px] border-[#61410B] border-[0.5px]">
            <X className="h-4 w-4 text-amber-500" />
            <span className="sr-only">Close</span>
          </StyledDialogClose>
        </div>

        {/* Search input */}
        <div className="px-4 py-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#FAFAFA20]" />
            </div>
            <input
              type="text"
              placeholder="search token or paste address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#27272A] text-[#FAFAFA] placeholder-[#FAFAFA20] pl-10 pr-10 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <div className="w-6 h-6 bg-[#627eea] rounded-md flex items-center justify-center">
                <Image
                  src="/tokens/mono/ETH.svg"
                  alt="ETH"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[420px] overflow-y-auto">
          {/* Wallet tokens section */}
          {filteredWalletTokens.length > 0 && (
            <div>
              <div className="px-4 py-2 text-sm text-[#FAFAFA55]">
                your wallet
              </div>
              <div>
                {filteredWalletTokens.map((token) => (
                  <div
                    key={token.id}
                    className="token-item-wrapper"
                    onClick={() => handleSelectToken(token)}
                  >
                    <div className="token-item-inner">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative flex-shrink-0">
                          <Image
                            src={`/tokens/branded/${token.icon}`}
                            alt={token.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-medium text-[#FAFAFA]">
                            {token.name}
                          </div>
                          <div className="flex gap-2 text-sm text-[#FAFAFA55]">
                            <span className="numeric-input flex items-center">
                              ${token.ticker}
                            </span>
                            <span
                              className="ml-4 numeric-input text-[10px] flex items-center"
                              style={{ transform: "translateY(1px)" }}
                            >
                              {formatAddress(token.address)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-[#FAFAFA] numeric-input">
                          {token.userBalanceUsd}
                        </div>
                        <div className="text-sm text-[#FAFAFA55] numeric-input">
                          {token.userBalance}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All tokens section */}
          {filteredAllTokens.length > 0 && (
            <div>
              <div className="px-4 py-2 text-sm text-[#FAFAFA55]">
                all tokens
              </div>
              <div>
                {filteredAllTokens.map((token) => (
                  <div
                    key={token.id}
                    className="token-item-wrapper"
                    onClick={() => handleSelectToken(token)}
                  >
                    <div className="token-item-inner">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 relative flex-shrink-0">
                          <Image
                            src={`/tokens/branded/${token.icon}`}
                            alt={token.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-medium text-[#FAFAFA]">
                            {token.name}
                          </div>
                          <div className="flex gap-2 text-sm text-[#FAFAFA55]">
                            <span className="numeric-input flex items-center">
                              ${token.ticker}
                            </span>
                            <span
                              className="ml-4 numeric-input text-[10px] flex items-center"
                              style={{ transform: "translateY(1px)" }}
                            >
                              {formatAddress(token.address)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-[#FAFAFA] numeric-input">
                          {token.userBalanceUsd}
                        </div>
                        <div className="text-sm text-[#FAFAFA55] numeric-input">
                          {token.userBalance}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {filteredWalletTokens.length === 0 &&
            filteredAllTokens.length === 0 && (
              <div className="p-4 text-center text-[#FAFAFA55]">
                No tokens found matching &quot;{searchQuery}&quot;
              </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectTokenButton;
