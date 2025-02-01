import { Token } from '@/types/token'
import { Chain } from '@/types/chain'
import { TOKENS } from '@/config/tokens'
import { CHAINS } from '@/config/chains'

export * from '@/config/chains'
export * from '@/config/tokens'
export * from '@/config/contracts'
export * from '@/config/env'

// Example helper functions
export function getTokenByAddress(chainId: number, address: string): Token | undefined {
  return Object.values(TOKENS).find(
    token => token.chains[chainId]?.address.toLowerCase() === address.toLowerCase()
  )
}

export function getAllChains(): Chain[] {
  return Object.values(CHAINS)
}

export function getChainById(chainId: number): Chain | undefined {
  return CHAINS[chainId]
}

export function getTokensForChain(chainId: number): Token[] {
  return Object.values(TOKENS).filter(token => token.chains[chainId])
}