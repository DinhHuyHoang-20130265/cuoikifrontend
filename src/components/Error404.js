import "./assets/error404.css"
import {Link} from "react-router-dom";

const Error404 = () => {
    return (<div id="colorlib-notfound">
        <div className="colorlib-notfound">
            <div className="colorlib-notfound-404">
                <h3 id="colorlib_404_customizer_page_heading"></h3>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2 id="colorlib_404_customizer_content">Not Found</h2>
            <Link to={"/home"} className={"go_back"}>Bấm vào đây để quay trở về trang chủ</Link>
        </div>
    </div>)
}

export default Error404