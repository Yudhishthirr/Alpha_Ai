"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {tools} from "@/constants";
// import {getApiLimitCount} from "@/lib/ApiLimitProvider";
const DashboardPage = () => {
  const router = useRouter();
  // const nb = getApiLimitCount()
  // console.log("getApiLimitCount:",nb)
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
         ALPHA-AI MICRO AI SAAS
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          INCREASE YOUR PRODUCATIVITY 10X FASTER WITH ALPHA-AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          tool.label !== "Settings"?
            <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>:null

          ))}
      </div>
    </div>
      
  )
}

export default DashboardPage