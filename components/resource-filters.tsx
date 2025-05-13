"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ResourceFilters() {
  const [activeTab, setActiveTab] = useState("all")
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="space-y-6 not-prose">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search resources..."
            className={`pl-10 ${isDark ? "bg-black border-gray-800 focus:border-[#d30000]" : "bg-white border-blue-200 focus:border-blue-600"} rounded-lg h-11`}
          />
        </div>
        <Button
          className={`${isDark ? "bg-[#d30000] hover:bg-[#ff3333]" : "bg-blue-600 hover:bg-blue-500"} text-white h-11`}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList
          className={`grid grid-cols-5 ${isDark ? "bg-black border border-gray-800" : "bg-white border border-blue-200"} p-1 rounded-lg`}
        >
          {["all", "papers", "courses", "tools", "books"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={`capitalize ${
                activeTab === tab
                  ? isDark
                    ? "data-[state=active]:bg-[#3a0000] data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
                  : ""
              }`}
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
