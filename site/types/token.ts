export interface Token {
    symbol: string
    name: string
    decimals: number
    logoPath: string
    chains: {
      [chainId: number]: {
        address: string
        decimals: number
      }
    }
  }