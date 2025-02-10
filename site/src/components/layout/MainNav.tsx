'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import useUIStore from "@/store/uiStore"
import { TAB_CONFIG } from "@/config/tabs"
import { Tab } from "@/types/tab"

export function MainNav() {
  const activeTab = useUIStore((state) => state.activeTab)
  const setActiveTab = useUIStore((state) => state.setActiveTab)

  return (
    <nav className="flex items-center space-x-4">
      {(Object.entries(TAB_CONFIG) as [Tab, typeof TAB_CONFIG[Tab]][]).map(([value, config]) => {
        const href = `/dapp/${value}`
        
        return (
          <Link 
            key={value} 
            href={config.disabled ? "#" : href} 
            onClick={() => !config.disabled && setActiveTab(value)}
            passHref
          >
            <Button
              variant={activeTab === value ? "default" : "ghost"}
              disabled={config.disabled}
              title={config.disabledMessage}
              className="text-sm font-medium transition-colors"
            >
              {config.label}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}