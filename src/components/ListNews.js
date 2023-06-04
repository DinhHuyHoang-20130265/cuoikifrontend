import {RssCate} from "../rss/rss";
import {Link, useLoaderData} from "react-router-dom";
import {catedatas} from "../catedatas/cate-list";
import {useEffect, useState} from "react";

let cate = "";
export const Breadcrumb = (params) => {
    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                    <Link to={"/home"} className="breadcrumb-item f1-s-3 cl9">
                        Trang chủ
                    </Link>
                    <span
                        className="breadcrumb-item f1-s-3 cl9">{catedatas.find(item => item.cate === params.cate).name}</span>
                </div>
                <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                    <input className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45" type="text" name="search"
                           placeholder="Search"/>
                    <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export const PageHeading = (params) => {
    return (
        <div className="container p-t-4 p-b-40">
            <h2 className="f1-l-1 cl2">
                {params.name}
            </h2>
        </div>
    )
}
export const PostItem = (params) => {
    return (<div className="col-sm-6 p-r-25 p-r-15-sr991">
        <div className="m-b-45">
            <Link to={`/news/${params.link.substring(params.link.lastIndexOf("/") + 1, params.link.indexOf(".htm"))}`}
                  className="wrap-pic-w hov1 trans-03">
                <img src={params.imageUrl} alt="IMG"/>
            </Link>

            <div className="p-t-16">
                <h5 className="p-b-5">
                    <Link
                        to={`/news/${params.link.substring(params.link.lastIndexOf("/") + 1, params.link.indexOf(".htm"))}`}
                        className="f1-m-3 cl2 hov-cl10 trans-03">
                        {params.title}
                    </Link>
                </h5>

                <span className="cl8">
                    <span className="f1-s-3">
                        {params.pubDate}
                    </span>
                </span>
            </div>
        </div>
    </div>)
}
export const ListPost = (params) => {
    return (
        <div className="row">
            {params.list.map(item => <PostItem link={item.link} imageUrl={item.imageUrl} pubDate={item.pubDate}
                                               title={item.title}/>)}
        </div>
    )
}
export const Pagination = (params) => {
    let menuItems = [];
    let PostPerPage = 6;
    let pageTotal = Math.ceil(params.numb / PostPerPage)

    function onClick(page) {
        params.handlePageClick(page);
    }

    for (var i = 0; i < pageTotal; i++) {
        let page = i + 1;
        menuItems.push(<button onClick={() => onClick(page)}
                               className={`flex-c-c pagi-item hov-btn1 trans-03 m-all-7 ${params.currentPage === i + 1 ? `pagi-active` : ``}`}>{i + 1}</button>)
    }
    return (
        <div className="flex-wr-s-c m-rl--7 p-t-15">
            {menuItems}
        </div>
    )
}

export const PostLeft = (params) => {
    const [cate, setCate] = useState(params);
    const [currentPage, setCurrentPage] = useState(1);
    const list = RssCate(cate.cate);

    useEffect(() => {
        setCurrentPage(1);
    }, [params]);

    let indexOfLastPost = currentPage * 6;
    let indexOfFirstPost = indexOfLastPost - 6;
    let currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    function handlePageClick(page) {
        setCurrentPage(page);
        console.log(currentPosts)
    };

    return (
        <div className="col-md-10 col-lg-8 p-b-80">
            <ListPost key={cate.cate} list={currentPosts}></ListPost>
            <Pagination numb={list.length} currentPage={currentPage} handlePageClick={handlePageClick}></Pagination>
        </div>
    )
}

export const Subscribe = () => {
    return (
        <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
            <h5 className="f1-m-5 cl0 p-b-10">
                Subscribe
            </h5>

            <p className="f1-s-1 cl0 p-b-25">
                Get all latest content delivered to your email a few times a month.
            </p>

            <form className="size-a-9 pos-relative">
                <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email" placeholder="Email"/>

                <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                    <i className="fa fa-arrow-right"></i>
                </button>
            </form>
        </div>
    )
}
export const MostPopular = () => {
    return (
        <div className="p-b-23">
            <div className="how2 how2-cl4 flex-s-c">
                <h3 className="f1-m-2 cl3 tab01-title">
                    Most Popular
                </h3>
            </div>

            <ul className="p-t-35">
                <li className="flex-wr-sb-s p-b-22">
                    <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        1
                    </div>

                    <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                </li>

                <li className="flex-wr-sb-s p-b-22">
                    <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        2
                    </div>

                    <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                        Proin velit consectetur non neque
                    </a>
                </li>

                <li className="flex-wr-sb-s p-b-22">
                    <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        3
                    </div>

                    <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                        Nunc vestibulum, enim vitae condimentum volutpat lobortis ante
                    </a>
                </li>

                <li className="flex-wr-sb-s p-b-22">
                    <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                        4
                    </div>

                    <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                        Proin velit justo consectetur non neque elementum
                    </a>
                </li>

                <li className="flex-wr-sb-s p-b-22">
                    <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                        5
                    </div>

                    <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                        Proin velit consectetur non neque
                    </a>
                </li>
            </ul>
        </div>
    )
}

export const Advertisement = () => {
    return (
        <div className="flex-c-s p-b-50">
            <a href="#">
                <img className="max-w-full" src="images/banner-02.jpg" alt="IMG"/>
            </a>
        </div>
    )
}

export const TagCate = () => {
    return (
        <div>
            <div className="how2 how2-cl4 flex-s-c m-b-30">
                <h3 className="f1-m-2 cl3 tab01-title">
                    Tags
                </h3>
            </div>

            <div className="flex-wr-s-s m-rl--5">
                <a href="#"
                   className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                    Fashion
                </a>

                <a href="#"
                   className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                    Lifestyle
                </a>

                <a href="#"
                   className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                    Denim
                </a>

                <a href="#"
                   className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                    Streetstyle
                </a>
            </div>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="col-md-10 col-lg-4 p-b-80">
            <div className="p-l-10 p-rl-0-sr991">
                <Subscribe></Subscribe>
                <MostPopular></MostPopular>
                <Advertisement></Advertisement>
                <TagCate></TagCate>
            </div>
        </div>
    )
}

export const Post = (params) => {
    return (
        <section className="bg0 p-t-70 p-b-55">
            <div className="container">
                <div className="row justify-content-center">
                    <PostLeft key={cate.cate} cate={params.cate}></PostLeft>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    )
}
export const handleNextItem = () => {
    console.log("count");
};

export function ListNews() {
    const cate = useLoaderData();
    return (<div>
        <Breadcrumb cate={cate.cate}></Breadcrumb>
        <PageHeading name={cate.name}></PageHeading>
        <Post key={cate.cate} cate={cate.cate}></Post>
    </div>)
}

export async function loadList({params}) {
    return catedatas.find(item => item.cate == params.cate);
}