import { Token } from '@/types/token'

export const TOKENS: { [symbol: string]: Token } = {
  WETH: {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    logoPath: '/images/tokens/branded/ETH.svg',
    chains: {
      1: {
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        decimals: 18
      },
      42161: {
        address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
        decimals: 18
      }
    }
  },
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoPath: '/images/tokens/branded/USDC.svg',
    chains: {
      1: {
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        decimals: 6
      },
      42161: {
        address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
        decimals: 6
      }
    }
  }
} as const