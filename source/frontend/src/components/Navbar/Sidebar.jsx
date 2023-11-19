import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()
// https://drive.google.com/uc?export=download&id=1Pwk3tshum6f-dBKg8FlTo1RU-zM_qhQn


export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <div id="Whole-Component">
        <nav className="w-screen h-14 z-10 top-0 fixed bg-Celeste2UCR flex border-y-gray-200 border-b-2 justify-between" id="navbar">
            <div className="flex items-center pl-7">
                <img
                    src="https://drive.google.com/uc?export=download&id=1Vv4vGu4P71TFXffdgOVlsqL-hqIqaOEm"
                    className=" w-12 h-auto"
                    alt=""
                />
                <h1 className="font-myriad text-2xl flex justify-center items-center pl-2 pointer-events-none">
                    Gestión Actvivos No Técnologicos
                </h1>
            </div>
            <img
                src="https://ori.ucr.ac.cr/themes/breeze/images/logo--ori.svg"
                alt=""
                className=" w-60 h-auto pr-7"
            />
        </nav>
        <aside className="h-screen pt-12 z-0 fixed" id="SideNavBar">
          <nav className={`h-full flex flex-col bg-white border-r shadow-sm
          ${
              expanded ? "w-56" : "w-20"
          }`}>
              <div className="py-4 px-5 p-pb-2 flex items-center">
                  <button
                      onClick={() => setExpanded((curr) => !curr)}
                      className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                  >
                      {expanded ? <ChevronFirst /> : <ChevronLast />}
                  </button>
                  <div className="flex items-center px-2 justify-center">
                      <h2 className={`font-semibold px-2 text-xl overflow-hidden transition-all
                                  ${expanded ? "w-16" : "w-0 invisible"}`}>
                          Menú
                      </h2>
                  </div>
              </div>

              <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex-1 px-3">{children}</ul>
              </SidebarContext.Provider>

              <div className="border-t flex p-3 py-4">
              <img
                  src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                  alt=""
                  className="w-10 h-10 rounded-md"
              />
              <div
                  className={`
                  flex justify-between items-center
                  overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
              `}
              >
                  <div className="leading-4">
                  <h4 className="font-semibold">Juan José Granados</h4>
                  <span className="text-xs text-gray-600">juan.granados@ucr.ac.cr</span>
                  </div>
                  <MoreVertical size={20} />
              </div>
              </div>
          </nav>
        </aside>
    </div>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800"
            : "hover:bg-blue-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-blue-100 text-blue-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}