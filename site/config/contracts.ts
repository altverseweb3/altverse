import { env } from '@/config/env'

export const CONTRACTS = {
  BRIDGE: {
    address: env.NEXT_PUBLIC_BRIDGE_ADDRESS,
    abi: [] // Import ABI here
  },
  ROUTER: {
    address: env.NEXT_PUBLIC_ROUTER_ADDRESS,
    abi: [] // Import ABI here
  }
} as const