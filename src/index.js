import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ServiceWorkerUpdater from "./ServiceWorkerUpdater";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const startApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ServiceWorkerUpdater />
            <BrowserRouter>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ReactNotification />
                    <App />
                </LocalizationProvider>
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
};

if (!window.cordova) {
    startApp();
} else {
    document.addEventListener("deviceready", startApp, false);
}
