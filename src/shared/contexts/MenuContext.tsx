import { createContext, useState } from "react";

export const MenuContext = createContext({
    sidebarStatus: true,
    toggleSidebar: () => {},
    closeSidebar: () => {},
    openSidebar: () => {},
});

export default function MenuProvider ({ ...props }) {
    const [sidebarStatus, setSidebarStatus] = useState(true);
    
    const openSidebar = () => {
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
            setSidebarStatus(false);
        }
    };
        
    const closeSidebar = () => {
        if (typeof document !== 'undefined') {
            document.documentElement.style.removeProperty('--SideNavigation-slideIn');
            document.body.style.removeProperty('overflow');
            setSidebarStatus(true);
        }
    };

    const toggleSidebar = (): void => {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-slideIn');
        if (typeof window !== 'undefined' && typeof document !== 'undefined')
            slideIn ? closeSidebar() : openSidebar();
    }

    return (
        <MenuContext.Provider value={{ sidebarStatus, toggleSidebar, closeSidebar, openSidebar }}>
            {props.children}
        </MenuContext.Provider>
    );
}