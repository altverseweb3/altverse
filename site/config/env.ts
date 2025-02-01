export const env = {
    // General
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || 'development',
    
    // RPCs
    NEXT_PUBLIC_ETHEREUM_RPC: process.env.NEXT_PUBLIC_ETHEREUM_RPC || 'https://eth-mainnet.g.alchemy.com/v2/your-key', // TODO: change to real value
    NEXT_PUBLIC_CELO_RPC: process.env.NEXT_PUBLIC_CELO_RPC || 'https://celo-mainnet.g.alchemy.com/v2/your-key', // TODO: change to real value
    NEXT_PUBLIC_OPTIMISM_RPC: process.env.NEXT_PUBLIC_OPTIMISM_RPC || 'https://opt-mainnet.g.alchemy.com/v2/your-key', // TODO: change to real value
    
    // Contracts
    NEXT_PUBLIC_BRIDGE_ADDRESS: process.env.NEXT_PUBLIC_BRIDGE_ADDRESS || '0x...', // TODO: change to real value
    NEXT_PUBLIC_ROUTER_ADDRESS: process.env.NEXT_PUBLIC_ROUTER_ADDRESS || '0x...', // TODO: change to real value
  } as const