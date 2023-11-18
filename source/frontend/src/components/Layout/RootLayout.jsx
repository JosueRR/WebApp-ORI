import Sidebar, { SidebarItem } from "../Navbar/Sidebar";
import { useOutlet } from "react-router-dom";

import {
    LifeBuoy,
    Receipt,
    Boxes,
    Package,
    UserCircle,
    BarChart3,
    Settings,
  
  } from 'lucide-react'

function RootLayout({children}) {
    const outlet = useOutlet();
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem icon={<BarChart3 size={20} />} text={"Statistics"} active />
                <SidebarItem icon={<UserCircle size={20} />} text={"User"} />
                <SidebarItem icon={<Boxes size={20} />} text={"Statistics"} />
                <SidebarItem icon={<Package size={20} />} text={"Statistics"} alert />
                <SidebarItem icon={<Receipt size={20} />} text={"Statistics"} />
                <hr className="my-3" />
                <SidebarItem icon={<Settings size={20} />} text={"Statistics"} />
                <SidebarItem icon={<LifeBuoy size={20} />} text={"Statistics"} />
            </Sidebar>
            <main className="justify-center h-full flex-1 px-8 py-4 border-2 mt-16">{outlet}</main>
        </div>
    );
}

export default RootLayout;