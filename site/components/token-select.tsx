// components/token-select.tsx
import { TOKENS, getTokensForChain } from '@/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

interface TokenSelectProps {
  chainId: number
  onChange: (token: string) => void
  className?: string
}

export function TokenSelect({ chainId, onChange, className }: TokenSelectProps) {
  const availableTokens = getTokensForChain(chainId)

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={`w-[140px] ${className}`}>
        <SelectValue placeholder="Select token" />
      </SelectTrigger>
      <SelectContent>
        {availableTokens.map((token) => (
          <SelectItem key={token.symbol} value={token.symbol}>
            <div className="flex items-center gap-2">
              <Image
                src={token.logoPath}
                alt={token.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{token.symbol}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}