import { Chain } from '@/types/chain'
import { env } from '@/config/env'

export const CHAINS: { [chainId: number]: Chain } = {
  1: {
    id: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    rpcUrl: env.NEXT_PUBLIC_ETHEREUM_RPC,
    explorerUrl: 'https://etherscan.io',
    logoPath: '/images/tokens/branded/ETH.svg',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  },
  12345: {
    id: 12345,
    name: 'Celo',
    symbol: 'CELO',
    rpcUrl: env.NEXT_PUBLIC_CELO_RPC,
    explorerUrl: 'https://celoscan.io',
    logoPath: '/images/tokens/branded/CELO.svg',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    }
  }
} as const