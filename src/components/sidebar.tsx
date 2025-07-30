"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col justify-between border-r bg-background p-4">
      <div className="space-y-4">
        <Link href="/">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/settings">Settings</Link>
        {/* Thêm các item khác nếu có */}
      </div>

      {/* Góc cuối sidebar */}
      <div className="pt-4 border-t">
        <ThemeToggle />
      </div>
    </div>
  )
}
