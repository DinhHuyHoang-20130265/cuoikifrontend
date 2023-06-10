import {createBrowserRouter} from "react-router-dom";
import {loadList, ListNews} from "../components/ListNews";
import {loadDetails, NewsDetails} from "../components/NewsDetails";
import {Home} from "../components/Home";
import App from "../App";
import {Viewed} from "../components/Viewed";
import {SavedPost} from "../components/SavedPost";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {
            path: "",
            element: <Home/>
        }, {
            path: "home",
            element: <Home/>,
        }, {
            path: ":cate",
            element: <ListNews/>,
            loader: loadList
        }, {
            path: ":cate/:title",
            element: <NewsDetails/>,
            loader: loadDetails
        }, {
            path: "history",
            element: <Viewed/>
        }, {
            path: "saved",
            element: <SavedPost/>
        }]
}]);