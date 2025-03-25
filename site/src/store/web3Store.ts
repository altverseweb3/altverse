import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  PersistOptions,
  StateStorage,
} from "zustand/middleware";
import { StateCreator, StoreApi } from "zustand";
import { WalletInfo, Web3StoreState, WalletType } from "@/types/web3";
import { Chain, defaultChain } from "@/config/chains";
import React from "react";

// Extend the store state to include hydration status
interface ExtendedWeb3StoreState extends Web3StoreState {
  // Used by useStoreHydration hook to track hydration status
  _hasHydrated?: boolean;
}

// Helper type for the persisted state - everything except _hasHydrated
type PersistedState = Omit<ExtendedWeb3StoreState, "_hasHydrated">;

// Using Zustand's built-in types instead of defining our own

// Create a custom version of persist middleware that handles SSR/hydration
const createPersistMiddleware =
  <T extends ExtendedWeb3StoreState>(config: StateCreator<T, [], []>) =>
  (
    set: StoreApi<T>["setState"],
    get: StoreApi<T>["getState"],
    api: StoreApi<T>,
  ) => {
    const isSSR = typeof window === "undefined";

    // Configure persistence options
    const persistOptions: PersistOptions<T, PersistedState> = {
      name: "altverse-storage-web3",
      storage: createJSONStorage(() =>
        isSSR
          ? ({
              getItem: () => Promise.resolve(null),
              setItem: () => Promise.resolve(),
              removeItem: () => Promise.resolve(),
            } as StateStorage)
          : localStorage,
      ),
      version: 1,
      partialize: (state): PersistedState => {
        // Create a shallow copy of state without _hasHydrated
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _hasHydrated, ...persistedState } = state;

        // Explicitly handle the wallet info to ensure we don't store providers
        return {
          ...persistedState,
          connectedWallets: state.connectedWallets.map((wallet) => ({
            type: wallet.type,
            name: wallet.name,
            address: wallet.address,
            chainId: wallet.chainId,
          })),
          activeWallet: state.activeWallet
            ? {
                type: state.activeWallet.type,
                name: state.activeWallet.name,
                address: state.activeWallet.address,
                chainId: state.activeWallet.chainId,
              }
            : null,
        } as PersistedState;
      },
      // Add onRehydrateStorage to track hydration state
      onRehydrateStorage: () => (state) => {
        if (state) {
          set({ _hasHydrated: true } as unknown as Partial<T>);
        }
      },
    };

    // Create the persist store with the config
    return persist(config, persistOptions)(set, get, api);
  };

// Create the store with our custom middleware
const useWeb3Store = create<ExtendedWeb3StoreState>()(
  createPersistMiddleware((set) => ({
    connectedWallets: [],
    activeWallet: null,
    _hasHydrated: false,

    // Chain selection state
    sourceChain: defaultChain,
    destinationChain: defaultChain,

    // Wallet actions
    addWallet: (wallet: WalletInfo) => {
      // Create a new wallet object without the provider
      const walletForStorage = {
        type: wallet.type,
        name: wallet.name,
        address: wallet.address,
        chainId: wallet.chainId,
      };

      set((state) => {
        const existingWalletIndex = state.connectedWallets.findIndex(
          (w) => w.type === wallet.type,
        );
        let newWallets: Array<Omit<WalletInfo, "provider">>;

        if (existingWalletIndex >= 0) {
          newWallets = [...state.connectedWallets];
          newWallets[existingWalletIndex] = walletForStorage;
        } else {
          newWallets = [...state.connectedWallets, walletForStorage];
        }

        return {
          connectedWallets: newWallets,
          activeWallet: state.activeWallet || walletForStorage,
        };
      });
    },

    removeWallet: (walletType: WalletType) => {
      set((state) => ({
        connectedWallets: state.connectedWallets.filter(
          (w) => w.type !== walletType,
        ),
        activeWallet:
          state.activeWallet?.type === walletType
            ? state.connectedWallets.find((w) => w.type !== walletType) || null
            : state.activeWallet,
      }));
    },

    setActiveWallet: (walletType: WalletType) => {
      set((state) => ({
        activeWallet:
          state.connectedWallets.find((w) => w.type === walletType) ||
          state.activeWallet,
      }));
    },

    updateWalletAddress: (walletType: WalletType, address: string) => {
      set((state) => ({
        connectedWallets: state.connectedWallets.map((wallet) =>
          wallet.type === walletType ? { ...wallet, address } : wallet,
        ),
        activeWallet:
          state.activeWallet?.type === walletType
            ? { ...state.activeWallet, address }
            : state.activeWallet,
      }));
    },

    updateWalletChainId: (walletType: WalletType, chainId: number) => {
      set((state) => ({
        connectedWallets: state.connectedWallets.map((wallet) =>
          wallet.type === walletType ? { ...wallet, chainId } : wallet,
        ),
        activeWallet:
          state.activeWallet?.type === walletType
            ? { ...state.activeWallet, chainId }
            : state.activeWallet,
      }));
    },

    disconnectAll: () => {
      set({
        connectedWallets: [],
        activeWallet: null,
      });
    },

    // Chain selection actions
    setSourceChain: (chain: Chain) => {
      set((state) => ({
        sourceChain: chain,
        // Optionally prevent same source and destination
        destinationChain:
          state.destinationChain.id === chain.id
            ? state.sourceChain
            : state.destinationChain,
      }));
    },

    setDestinationChain: (chain: Chain) => {
      set((state) => ({
        destinationChain: chain,
        // Optionally prevent same source and destination
        sourceChain:
          state.sourceChain.id === chain.id
            ? state.destinationChain
            : state.sourceChain,
      }));
    },

    swapChains: () => {
      set((state) => ({
        sourceChain: state.destinationChain,
        destinationChain: state.sourceChain,
      }));
    },
  })),
);

// Create a hook to check if the store has hydrated
export const useStoreHydration = (): boolean => {
  const isHydrated = useWeb3Store((state) => !!state._hasHydrated);

  // Add a debug message to see when hydration is complete
  React.useEffect(() => {
    if (isHydrated) {
      console.log("Zustand store has hydrated from localStorage");
    }
  }, [isHydrated]);

  return isHydrated;
};

// Existing hook
export const useCurrentChainId = (): number | null => {
  return useWeb3Store((state) => state.activeWallet?.chainId ?? null);
};

// New hooks for chain selection
export const useSourceChain = (): Chain => {
  return useWeb3Store((state) => state.sourceChain);
};

export const useDestinationChain = (): Chain => {
  return useWeb3Store((state) => state.destinationChain);
};

export default useWeb3Store;
