import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {registerGSAPPlugins} from "./utils/registerGSAP.ts";
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./utils/theme.ts";

const light = lightTheme();

registerGSAPPlugins();
ReactDOM.createRoot(document.getElementById('root')!).render(<ThemeProvider theme={light}> <App/> </ThemeProvider>)
