'use client'
import { Button } from "@/components/ui/button"
import useStore from "@/store/useStore"

export function MainNav() {
  const activeTab = useStore((state) => state.activeTab)
  const setActiveTab = useStore((state) => state.setActiveTab)

  const navItems = [
    { value: 'swap', label: 'Swap' },
    { value: 'bridge', label: 'Bridge' },
    { value: 'farm', label: 'Farm' },
    { value: 'stake', label: 'Stake' },
    { value: 'dashboard', label: 'Dashboard' },
  ]

  return (
    <nav className="flex items-center space-x-4">
      {navItems.map((item) => (
        <Button
          key={item.value}
          variant={activeTab === item.value ? 'default' : 'ghost'}
          onClick={() => setActiveTab(item.value as any)}
          className="text-sm font-medium transition-colors"
        >
          {item.label}
        </Button>
      ))}
    </nav>
  )
}