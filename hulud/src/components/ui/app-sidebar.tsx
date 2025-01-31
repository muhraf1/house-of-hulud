import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { MessageSquare } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Chat history items
const chatHistory = [
  {
    title: "Chat with GPT-4",
    timestamp: "2 mins ago",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Book Analysis",
    timestamp: "1 hour ago",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Story Discussion",
    timestamp: "2 hours ago",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Novel Review",
    timestamp: "1 day ago",
    url: "#",
    icon: MessageSquare,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-black/10 backdrop-blur-[20px] border-r border-[#093028]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#072A23] font-semibold">Chat History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chatHistory.map((chat) => (
                <SidebarMenuItem key={chat.title}>
                  <SidebarMenuButton asChild>
                    <a href={chat.url} className="flex flex-col items-start hover:bg-[#072A23]/10 transition-colors">
                      <div className="flex items-center gap-2">
                        <chat.icon className="h-4 w-4 text-white" />
                        <span className="text-white">{chat.title}</span>
                      </div>
                      <span className="text-xs text-white ml-6">{chat.timestamp}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
