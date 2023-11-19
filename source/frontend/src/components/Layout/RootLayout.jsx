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
    LampDesk,
    FileBox,
    Users2,
    Truck,
    ClipboardCheck,
    BookOpen
  
  } from 'lucide-react'

function RootLayout({children}) {
    const outlet = useOutlet();
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem icon={<Boxes size={20} />} text={"Activos"} active />
                <SidebarItem icon={<FileBox size={20} />} text={"Tipos"} />
                <hr className="my-3" />
                <SidebarItem icon={<Users2 size={20} />} text={"Responsables"} />
                <SidebarItem icon={<Truck size={20} />} text={"Proveedores"} alert />
                <hr className="my-3" />
                <SidebarItem icon={<ClipboardCheck size={20} />} text={"Solicitudes"} />
                <SidebarItem icon={<BookOpen size={20} />} text={"Bitacora"} />
                <hr className="my-3" />
                <SidebarItem icon={<Settings size={20} />} text={"Ajustes"} />
            </Sidebar>
            <main id='page-content' className="justify-center h-full flex-1 px-8 py-4 border-2 mt-16 ml-20">{outlet}</main>
        </div>
    );
}

export default RootLayout;