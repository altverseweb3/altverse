export interface Chain {
    id: number
    name: string
    symbol: string
    rpcUrl: string
    explorerUrl: string
    logoPath: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
  }