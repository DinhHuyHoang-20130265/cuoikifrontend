import {listNews} from "./ListNews";

export function loadDetails({params}) {
    console.log(params)
    return listNews.find(news => news.title === params.title);
}

export function NewsDetails() {

}