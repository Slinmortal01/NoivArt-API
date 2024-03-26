import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        green: Palette['primary'];
    }

    interface PaletteOptions {
        green?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true;
    }
}

export const theme = createTheme({
    palette: {
        green: {
            main: '#92c7a3',
            light: '#79a386',
            dark: '#5abe79',
            contrastText: '#242105',
        },
    },
});