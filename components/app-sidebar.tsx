"use client";

import { Home, Search, Settings, Plus } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import useSidebarTrigger from "../src/zustand/useSidebarTrigger";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },

  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { sidebar, toggleSidebar } = useSidebarTrigger();
  return (
    <Sidebar>
      <div className="flex flex-col h-full  z-30">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="mt-auto">
              {/* Add any content you want at the bottom */}
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="flex ">
                    <SidebarMenuButton asChild>
                      <a href="#logout">
                        <Plus />
                        <span>New Chat</span>
                      </a>
                    </SidebarMenuButton>
                    {!sidebar && <SidebarTrigger onClick={toggleSidebar} />}
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>
    </Sidebar>
  );
}
