// components/token-select.tsx
import { CHAINS, getAllChains } from '@/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

interface ChainSelectProps {
  onChange: (token: string) => void
  className?: string
}

export function ChainSelect({ onChange, className }: ChainSelectProps) {
  const availableChains = getAllChains();

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder="Select chain" />
      </SelectTrigger>
      <SelectContent>
        {availableChains.map((chain) => (
          <SelectItem key={chain.symbol} value={chain.symbol}>
            <div className="flex items-center gap-2">
              <Image
                src={chain.logoPath}
                alt={chain.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{chain.symbol}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}