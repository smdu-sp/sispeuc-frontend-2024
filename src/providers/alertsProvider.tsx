import { Check, PlaylistAddCheckCircleRounded } from "@mui/icons-material";
import { ColorPaletteProp, Snackbar, SvgIcon, SvgIconTypeMap, Typography } from "@mui/joy";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createContext, useState } from "react";

export const AlertsContext = createContext({
    open: true,
    message: '',
    title: '',
    alertType: '',
    duration: 0,
    icon: Check,
    toggleAlert: () => {},
    setAlert: (message?: string, title?: string, alertType?: ColorPaletteProp, duration?: number, icon?: any) => {},
});

export default function AlertsProvider ({ ...props }) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('Título');
    const [title, setTitle] = useState('Mensagem.');
    const [alertType, setAlertType] = useState<ColorPaletteProp>('primary');
    const [duration, setDuration] = useState(3000);
    const [icon, setIcon] = useState<any>(Check);

    const setAlert = (title?: string, message?: string, alertType?: ColorPaletteProp, duration?: number, icon?: any): void => {
        setMessage(message || 'Mensagem');
        setTitle(title || 'Título');
        setAlertType(alertType || 'primary');
        setDuration(duration || 3000);
        setIcon(icon || Check);
        setOpen(true);
    }

    const toggleAlert = (): void => {
        open ? setOpen(false) : setOpen(true);
    }
    return (
        <AlertsContext.Provider value={{ open, message, title, alertType, duration, icon, toggleAlert, setAlert }}>
            <Snackbar
                variant="solid"
                color={alertType}
                size="lg"
                invertedColors={true}
                autoHideDuration={duration}
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ maxWidth: 360, zIndex: 9999 }}
                startDecorator={<SvgIcon component={icon} />}
            >
                <div>
                    <Typography level="title-lg">{title}</Typography>
                    <Typography sx={{ mt: 1, mb: 2 }} level="title-md">{message}</Typography>
                </div>
            </Snackbar>
            {props.children}
        </AlertsContext.Provider>
    );
}