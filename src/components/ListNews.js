import {RssCate} from "../rss/rss";

export function loadList({params}) {
    console.log(params)
}

export const listNews =
    [{title: 2}, {title: 3}]

export function ListNews() {
    console.log(RssCate("tin-moi-nhat"));
    return (<div>ABC123</div>)
}
