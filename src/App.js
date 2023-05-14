import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './App.css';
import {store} from "./store/Store";
import {Header} from "./components/layout/header";
import {Footer} from "./components/layout/footer";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
