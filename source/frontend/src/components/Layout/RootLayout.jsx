import Sidebar, { SidebarItem } from "../Navbar/Sidebar";
import { useOutlet, useLocation } from "react-router-dom";

import {
    Boxes,
    Settings,
    FileBox,
    Users2,
    Truck,
    ClipboardCheck,
    BookOpen
  
  } from 'lucide-react'

function RootLayout({children}) {
    const outlet = useOutlet();
    let location = useLocation();
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem icon={<Boxes size={20} />} text={"Activos"} path={"/"} active={location.pathname.startsWith("/activos")} />
                <SidebarItem icon={<FileBox size={20} />} text={"Tipos"} path={'/tipos'} active={location.pathname.startsWith("/tipos")}/>
                <hr className="my-3" />
                <SidebarItem icon={<Users2 size={20} />} text={"Responsables"} path={'/responsables'} active={location.pathname.startsWith("/responsables")} />
                <SidebarItem icon={<Truck size={20} />} text={"Proveedores"} />
                <hr className="my-3" />
                <SidebarItem icon={<ClipboardCheck size={20} />} text={"Solicitudes"} alert/>
                <SidebarItem icon={<BookOpen size={20} />} text={"Bitacora"} />
                <hr className="my-3" />
                <SidebarItem icon={<Settings size={20} />} text={"Ajustes"} />
            </Sidebar>
            <main id='page-content' className="justify-center h-full flex-1 px-8 py-4 mt-16 ml-20">{outlet}</main>
        </div>
    );
}

export default RootLayout;