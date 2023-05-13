import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {loadList, ListNews} from "../components/ListNews";
import {loadDetails, NewsDetails} from "../components/NewsDetails";

export const webRouter = createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [{
        path: ":cateNews",
        element: <ListNews/>,
        loader: loadList,
        children: [{
            path: ":title",
            element: <NewsDetails/>,
            loader: loadDetails
        }]
    }]
}]);