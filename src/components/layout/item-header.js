import React, {useState} from "react";
import {RssCate} from "../../rss/rss";
import {Link} from "react-router-dom";

function Item(data) {
    const [item, setItem] = useState(data);

    return (
        <div className="col-3">
            <div>
                <Link className="wrap-pic-w hov1 trans-03"
                      to={`/${item.cate}/${item.link.substring(item.link.lastIndexOf("/") + 1, item.link.indexOf(".htm"))}`}>
                    <img alt="IMG" src={item.imageUrl}></img>
                </Link>

                <div className="p-t-10">
                    <h5 className="p-b-5">
                        <a className="f1-s-5 cl3 hov-cl10 trans-03">
                            {item.title}
                        </a>
                    </h5>
                    <span className="cl8">
                        <Link
                            to={`/${item.cate}/${item.link.substring(item.link.lastIndexOf("/") + 1, item.link.indexOf(".htm"))}`}
                            className="f1-s-6 cl8 hov-cl10 trans-03">{item.name} -
                        </Link>
                        <span className="f1-s-3 m-rl-3">{item.pubDate}
                        </span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export function CateItem(data) {
    const [cateitem, setItem] = useState(data);
    const listNews = RssCate(cateitem.cate)
    return (
        <li className={"mega-menu-item"}>
            <Link to={`${cateitem.cate}`}>{cateitem.name}</Link>
            <div className={"sub-mega-menu"}>
                <div className={"tab-content"}>
                    <div className={"tab-pane show active"} id="news-0" role="tabpanel">
                        <div className={"row"}>
                            {listNews.slice(0, 4).map(item => <Item
                                description={item.description.substring(0, 40).concat("...")}
                                imageUrl={item.imageUrl} title={item.title}
                                pubDate={item.pubDate.substring(0, item.pubDate.indexOf(" "))}
                                name={cateitem.name} link={item.link} cate={cateitem.cate}
                            />)}
                        </div>
                    </div>

                </div>
            </div>
        </li>
    )
}
