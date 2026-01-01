import ReactDom from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
const root=ReactDom.createRoot(document.querySelector("#root")).render(
    <>
    <App/>
    </>
)