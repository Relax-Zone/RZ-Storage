"use client"

import { HomeIcon, LucideProps , Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useState, ForwardRefExoticComponent, RefAttributes } from "react"

interface MenuItem {
    label: string
    href: string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    children?: Array<MenuItem>
}

export default function AppSidebar() {

    const [menu, setMenu] = useState<Array<MenuItem>>([{
        label: "Home",
        href: "/",
        icon: HomeIcon
    }])

    return (
        <Sidebar className="bg-zinc-950">
            <SidebarHeader>
                <div className="border p-4 rounded-lg">
                    <h1 className="font-bold text-foreground">Suwizx NAS</h1>
                    <div className="flex gap-1 items-center">
                        <div className="bg-green-500 aspect-square h-2 rounded-full"></div>
                        <p className="text-xs text-foreground/60">online</p>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Category</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu.map((item, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.href}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <div className="border p-4 rounded-lg flex items-center max-w-full">
                    <div className="flex flex-auto gap-2 items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="w-[100px]">
                            <p className="font-bold text-foreground">shadcn</p>
                            <p className="text-xs text-foreground/60 truncate">suwijak.promsatid@gmail.com</p>
                        </div>
                    </div>
                    <div className="hover:bg-zinc-700 bg-zinc-800 rounded-lg p-2 w-fit">
                        <Settings />
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
