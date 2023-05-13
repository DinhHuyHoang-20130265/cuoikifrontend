import {cateList} from "./CateList";

export function loadList({params}) {
    console.log(params)
    return cateList.find(cate => cate.cateNews === params.cateNews);
}

export function ListNews() {
    return [{title: 8}, {title: 2}]
}

export function listNews({params}) {

}
