'use client'

import { ThemeContext } from "@/shared/contexts/ThemeContext";
import { WbSunny, Nightlight } from "@mui/icons-material";
import { IconButton, SvgIcon } from "@mui/joy";
import { useContext } from "react";

export default function ThemeToggle({ ...props }) {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      color="primary"
      sx={{ p: 0.5 }}
      onClick={() => toggleMode()}
      {...props}
    >
      <SvgIcon component={mode === 'light' ? WbSunny : Nightlight} />
    </IconButton>
  );
}
