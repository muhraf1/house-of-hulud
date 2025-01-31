import * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Paperclip } from "lucide-react"
import MakerHooks from "./makerhooks"

function Base() {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handlePaperclipClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <SidebarProvider className="py-10 my-10">
            <AppSidebar />
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between gap-1">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger />
                        <h1 className="font-bold text-white">Ready to Ride?</h1>
                    </div>
                    <MakerHooks></MakerHooks>
                </div>
                <div className="bg-[#072A23] rounded-lg p-4">
                    <div className="relative">
                        <textarea 
                            placeholder="Insert E-book file to summarize" 
                            className="bg-[#072A23] rounded-lg min-h-24 w-full resize-none mb-2"
                        />
                        <Paperclip 
                            className="w-5 h-5 absolute bottom-4 left-2 text-gray-400 cursor-pointer hover:text-gray-300" 
                            onClick={handlePaperclipClick}
                        />
                        <Input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*,.pdf,.doc,.docx,.epub"
                        />
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Base