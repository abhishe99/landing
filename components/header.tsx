"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Sprout } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b border-border text-popover-foreground bg-[rgba(201,253,242,1)]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent">
            <Sprout className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Digital Kisan Mitra</h1>
            <p className="text-sm text-muted-foreground">किसान का डिजिटल साथी</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                हिंदी <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>हिंदी</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>ਪੰਜਾਬੀ</DropdownMenuItem>
              <DropdownMenuItem>मराठी</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                लॉगिन
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                रजिस्टर करें
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
