import { Token } from '@/types/token'

// TODO: Update all these values to the real values.

export const TOKENS: { [symbol: string]: Token } = {
  WETH: {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    logoPath: '/images/tokens/branded/ETH.svg',
    chains: {
      1: {
        address: '0x12345',
        decimals: 18
      },
      12345: {
        address: '0x56789',
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
        address: '0x98765',
        decimals: 6
      },
      12345: {
        address: '0x54321',
        decimals: 6
      }
    }
  }
} as const