import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Tab } from '@/types/tab'

interface StoreState {
  // Tab state
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
  
  // Wallet connection
  walletAddress: string | null
  setWalletAddress: (address: string | null) => void
  
  // Transaction history
  transactions: Transaction[]
  addTransaction: (tx: Transaction) => void
  clearTransactions: () => void
}

interface Transaction {
  hash: string
  type: 'swap' | 'bridge' | 'farm' | 'stake'
  status: 'pending' | 'completed' | 'failed'
  timestamp: number
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Tab state
      activeTab: 'swap',
      setActiveTab: (tab) => set({ activeTab: tab }),
    
      
      // Wallet connection
      walletAddress: null,
      setWalletAddress: (address) => set({ walletAddress: address }),
      
      // Transaction history
      transactions: [],
      addTransaction: (tx) => 
        set((state) => ({ 
          transactions: [...state.transactions, tx] 
        })),
      clearTransactions: () => set({ transactions: [] }),
    }),
    {
      name: 'altverse-storage', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage
      version: 1, // version number for migrations
      partialize: (state) => ({
        // Only persist these fields
        walletAddress: state.walletAddress,
        transactions: state.transactions,
        // We don't persist activeTab as we want it to start fresh each session
      }),
    }
  )
)

export default useStore