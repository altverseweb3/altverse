'use client'
import SwapComponent from "@/components/swap"
import useStore from "@/store/useStore"

export default function Home() {
  const activeTab = useStore((state) => state.activeTab)

  const renderContent = () => {
    switch (activeTab) {
      case 'swap':
        return <SwapComponent />
      case 'bridge':
        return <h1>bridge</h1>
      case 'farm':
        return <h1>farm</h1>
      case 'stake':
        return <h1>stake</h1>
      case 'dashboard':
        return <h1>dashboard</h1>
      default:
        return <SwapComponent />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="animation-fade-in">
          {renderContent()}
        </div>
      </div>
    </main>
  )
}