import {createBrowserRouter} from "react-router-dom";
import {loadList, ListNews} from "../components/ListNews";
import {loadDetails, NewsDetails} from "../components/NewsDetails";
import {Home} from "../components/Home";
import App from "../App";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: "home",
        element: <Home/>,
    }, {
        path: ":cate",
        element: <ListNews/>,
        loader: loadList
    }, {
        path: "news/:title",
        element: <NewsDetails/>,
        loader: loadDetails
    }]
}]);