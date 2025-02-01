import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown } from "lucide-react"
import { TokenSelect } from '@/components/token-select'
import { ChainSelect } from '@/components/chain-select'

const SwapComponent = () => {
  const [isLoading, setIsLoading] = useState(false)

  // Sample data - replace with your actual chains and tokens
  const chains = [
    { id: "ethereum", name: "Ethereum" },
    { id: "polygon", name: "Polygon" },
    { id: "arbitrum", name: "Arbitrum" },
  ]

  const tokens = [
    { id: "eth", name: "ETH" },
    { id: "usdc", name: "USDC" },
    { id: "usdt", name: "USDT" },
  ]

  const handleSwap = () => {
    setIsLoading(true)
    // Add your swap logic here
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Swap</CardTitle>
        <CardDescription>
          Transfer assets across chains with optimal routing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Source Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-end gap-2">
            <div className="flex-1">
              <Input 
                type="number" 
                placeholder="0.0" 
                className="text-2xl"
              />
            </div>
            <TokenSelect chainId={1} onChange={(token) => console.log(token)} />
          </div>
          <ChainSelect onChange={(chain) => console.log(chain)} />
        </div>

        {/* Swap Direction Indicator */}
        <div className="flex justify-center">
          <Button variant="ghost" size="icon">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Destination Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-end gap-2">
            <div className="flex-1">
              <Input 
                type="number" 
                placeholder="0.0" 
                className="text-2xl"
                readOnly
              />
            </div>
            <TokenSelect chainId={1} onChange={(token) => console.log(token)} />
          </div>
          <ChainSelect onChange={(chain) => console.log(chain)} />
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSwap}
          disabled={isLoading}
        >
          {isLoading ? "Swapping..." : "Swap"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SwapComponent