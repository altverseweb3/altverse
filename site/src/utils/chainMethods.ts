import { Chain, chains } from "@/config/chains";
import useWeb3Store from "@/store/web3Store";

// Global hydration tracker
let globalHydrated = false;

/**
 * Handles chain selection for source or destination chains
 * Ensures no duplicate chains are selected
 * @param chain The chain being selected
 * @param type Either "source" or "destination"
 */
export function handleChainChange(
  chain: Chain,
  type: "source" | "destination",
): void {
  const store = useWeb3Store.getState();
  const isSource = type === "source";

  // Get current chains
  const sourceChain = store.sourceChain;
  const destinationChain = store.destinationChain;

  // Get the appropriate setters
  const setSourceChain = store.setSourceChain;
  const setDestinationChain = store.setDestinationChain;

  // Determine which chains we're working with
  const oppositeChain = isSource ? destinationChain : sourceChain;
  const setCurrentChain = isSource ? setSourceChain : setDestinationChain;
  const setOppositeChain = isSource ? setDestinationChain : setSourceChain;

  // Log the change
  console.log(
    `${isSource ? "Source" : "Destination"} chain changed to:`,
    chain.name,
  );

  // Update the current chain
  setCurrentChain(chain);

  // If same chain selected, find a different one for the opposite side
  if (chain.id === oppositeChain.id) {
    const differentChain = Object.values(chains).find((c) => c.id !== chain.id);
    if (differentChain) {
      setOppositeChain(differentChain);
    }
  }
}

/**
 * Swap source and destination chains
 */
export function swapChains(): void {
  const store = useWeb3Store.getState();
  store.swapChains();
}

/**
 * Format a chain pair for display
 * @param sourceChain The source chain
 * @param destinationChain The destination chain
 * @returns Formatted string like "Ethereum → Polygon"
 */
export function formatChainRoute(
  sourceChain: Chain,
  destinationChain: Chain,
): string {
  return `${sourceChain.name} → ${destinationChain.name}`;
}

/**
 * Get a different chain from the one provided
 * Useful for ensuring source and destination are different
 * @param currentChain The chain to avoid
 * @returns A different chain
 */
export function getDifferentChain(currentChain: Chain): Chain | undefined {
  return Object.values(chains).find((c) => c.id !== currentChain.id);
}

/**
 * Check if the store has hydrated from localStorage
 * This uses a global variable to track hydration status across page navigations
 * @returns Boolean indicating if hydration is complete
 */
export function isStoreHydrated(): boolean {
  // If we've already detected hydration, return true immediately
  if (globalHydrated) return true;

  // Otherwise check the store
  const store = useWeb3Store.getState();
  const currentlyHydrated = !!store._hasHydrated;

  // If hydrated, update the global flag for future checks
  if (currentlyHydrated) {
    globalHydrated = true;
    console.log("Zustand store hydration detected and cached globally");
  }

  return currentlyHydrated;
}

/**
 * Hook to check and wait for hydration
 * Use this in components to track hydration status
 * @returns A function that checks hydration status
 */
export function useHydrationCheck(): () => Promise<boolean> {
  return async () => {
    // If already hydrated, return immediately
    if (globalHydrated) return true;

    // Otherwise check and wait if needed
    return new Promise<boolean>((resolve) => {
      const checkHydration = () => {
        if (isStoreHydrated()) {
          resolve(true);
        } else {
          setTimeout(checkHydration, 50);
        }
      };
      checkHydration();
    });
  };
}
