import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./css/util.min.css";
import "./css/main.css";
import './App.css';
import {store} from "./store/Store";
import {Header} from "./components/layout/header";
import {Footer} from "./components/layout/footer";
import {Outlet} from "react-router-dom";
import useScript from "./customHooks/importJSFile";

function App() {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}

export default App;
