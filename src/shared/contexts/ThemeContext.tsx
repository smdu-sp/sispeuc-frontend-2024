import { createContext, useState } from "react";
import { useColorScheme as joyColorScheme } from "@mui/joy";
import { useColorScheme as materialColorScheme } from "@mui/material";

export const ThemeContext = createContext({
    mode: 'light',
    toggleMode: () => {},
});

export default function ThemeProvider ({ ...props }) {
    const { setMode: setJoyMode } = joyColorScheme();
    const { setMode: setMaterialMode } = materialColorScheme();
    const [mode, setMode] = useState('light');
    
    const toggleMode = (): void => {
        const currentMode = mode;
        setJoyMode(currentMode === 'light' ? 'dark' : 'light');
        setMaterialMode(currentMode === 'light' ? 'dark' : 'light');
        setMode(currentMode === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
}