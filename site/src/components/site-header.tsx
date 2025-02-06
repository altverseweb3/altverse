import { MainNav } from "@/components/main-nav"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/zero-amber-500.svg"
              alt="Altverse Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <h1 className="text-xl">altverse</h1>
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" size="sm">Connect Wallet</Button>
        </div>
      </div>
    </header>
  )
}