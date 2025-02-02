// Stores web3 related context

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface StoreState {
  
  // Wallet connection
  activeWalletAddress: string | null
  setActiveWalletAddress: (address: string | null) => void

}


const useStore = create<StoreState>()(
  persist(
    (set) => ({

      // Wallet connection
      activeWalletAddress: null,
      setActiveWalletAddress: (address) => set({ activeWalletAddress: address }),
      
    }),
    {
      name: 'altverse-storage-web3', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage
      version: 1, // version number for migrations
      partialize: (state) => ({
        // Only persist these fields
        activeWalletAddress: state.activeWalletAddress,
      }),
    }
  )
)

export default useStore