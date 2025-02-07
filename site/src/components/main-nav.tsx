"use client";
import { Button } from "@/components/ui/button";
import useUIStore from "@/store/ui_store";
import { Tab } from "@/types/ui";

export function MainNav() {
  const activeTab = useUIStore((state) => state.activeTab);
  const setActiveTab = useUIStore((state) => state.setActiveTab);

  const navItems: Array<{ value: Tab; label: string }> = [
    { value: "swap", label: "Swap" },
    { value: "bridge", label: "Bridge" },
    { value: "stake", label: "Stake" },
    { value: "borrow", label: "Borrow" },
    { value: "dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="flex md:items-center md:space-x-4 flex-col md:flex-row space-y-2 md:space-y-0">
      {navItems.map((item) => (
        <Button
          key={item.value}
          variant={activeTab === item.value ? "default" : "ghost"}
          onClick={() => setActiveTab(item.value as Tab)}
          className="text-sm font-medium transition-colors justify-start md:justify-center w-full md:w-auto"
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
