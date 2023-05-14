import {cateList} from "./CateList";

export function loadList({params}) {
    console.log(params)
    return cateList.find(cate => cate.cate === params.cate);
}

export const listNews =
    [{title: 2}, {title: 3}]

export function ListNews() {
    return (<div>ABC123</div>)
}
