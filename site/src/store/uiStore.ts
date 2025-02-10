import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Tab } from "@/types/ui";

type Theme = "light" | "dark";

interface UIStoreState {
  // Tab state
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;

  // Theme state
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const useUIStore = create<UIStoreState>()(
  persist(
    (set) => ({
      // Tab state
      activeTab: "swap",
      setActiveTab: (tab) => set({ activeTab: tab }),

      // Theme state
      theme: "light",
      toggleTheme: () =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          console.log("Toggling theme to:", newTheme);
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark",
          );
          return { theme: newTheme };
        }),
      setTheme: (theme) => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        set({ theme });
      },
    }),
    {
      name: "altverse-storage-ui",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);

// Initialize theme based on system preference
if (typeof window !== "undefined") {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const store = useUIStore.getState();

  // Only set if theme hasn't been set before (first visit)
  if (!localStorage.getItem("altverse-storage-ui")) {
    store.setTheme(systemTheme);
  }
}

export default useUIStore;
