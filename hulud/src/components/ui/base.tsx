import * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"



function Base() {

    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarTrigger />
            <div className="flex justify-centers items-center"><h1>  Hello Again Bitch!</h1></div>

        </SidebarProvider>
    )
}

export default Base