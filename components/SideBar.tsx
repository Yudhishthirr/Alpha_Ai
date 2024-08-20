"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "./icons"
import {tools as routes} from "@/constants"
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react"
import { FreeCounter } from "./FreeCounter"
const SideBar = () => {
 
  const pathname = usePathname()
  
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/alpha.png" />
          </div>
          <h1 className="text-2xl font-bold">
            ALPHA
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            // const Icon = Icons[route.icon]
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-muted-foreground"
                )}
              >
                <div className="flex items-center flex-1">
                  
                  <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                  {route.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <FreeCounter apiLimitCount={0} isPro={false}/>
    </div>
  )
}

export default SideBar