import {RssCate, RssDetails} from "../rss/rss";
import {Link, useLoaderData} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {catedatas} from "../catedatas/cate-list";
import ContentOfPost from "./ContentOfPost";
import Error404 from "./Error404";
import Sidebar from "./layout/Sidebar";

export function loadDetails({params}) {
    const link = `/api/` + params.cate + "/" + params.title + ".htm";
    sessionStorage.setItem("link", `/` + params.cate + "/" + params.title + ".htm");
    return {link: link, cate: params.cate, title: params.title};
}

export const Breadcrumb = (props) => {
    const [isSaved, setIsSaved] = useState(false);
    const saved = localStorage.getItem('savedNews');
    const newsList = saved ? JSON.parse(saved) : [];
    useEffect(() => {
        if (props.item) {
            setIsSaved(newsList.findIndex(item => item.link === props.item.link) !== -1)
        }
    }, [isSaved, props])

    const savedNews = (news) => {
        if (news != null) {
            const existingNewsIndex = newsList.findIndex(item => item.link === news.link)
            if (!isSaved) {
                //Kiểm tra xem tin tức đã tồn tại trong danh sách hay chưa
                if (existingNewsIndex !== -1) {
                    newsList.splice(existingNewsIndex, 1);
                    newsList.unshift(news);
                } else newsList.unshift(news);
                localStorage.setItem('savedNews', JSON.stringify(newsList));
                setIsSaved(true);
            } else {
                newsList.splice(existingNewsIndex, 1);
                localStorage.setItem('savedNews', JSON.stringify(newsList));
                setIsSaved(false);
            }
        }
    };

    return (<div className="container">
        <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6 d-flex">
                <Link to={'/home'} className="breadcrumb-item f1-s-3 cl9">
                    Trang chủ
                </Link>
                <Link to={`/${props.cate}`} className="breadcrumb-item f1-s-3 cl9">
                    {catedatas.find(item => item.cate === props.cate).name}
                </Link>
                <span className="breadcrumb-item f1-s-3 cl9">
					 {props.title}
                </span>
            </div>
        </div>
        <a href={"#"} onClick={() => savedNews(props.item)} style={{fontSize:"24px"}}>
            <i className={"fa fa-bookmark"}
               style={{color: (isSaved ? "yellow" : "blue")}}></i></a>
    </div>)
}

export const Comment = () => {
    return (<div>
        <h4 className="f1-l-4 cl3 p-b-12">
            Leave a Comment
        </h4>

        <p className="f1-s-13 cl8 p-b-40">
            Your email address will not be published. Required fields are marked *
        </p>

        <form>
                <textarea className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20" name="msg"
                          placeholder="Comment..."></textarea>

            <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text" name="name"
                   placeholder="Name*"/>
            <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text"
                   name="email" placeholder="Email*"/>

            <input className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20" type="text"
                   name="website" placeholder="Website"/>

            <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                Post Comment
            </button>
        </form>
    </div>)
}

export const MainContent = (props) => {
    return (<div className="col-md-10 col-lg-8 p-b-30">
        <div className="p-r-10 p-r-0-sr991">
            <ContentOfPost post={props.post} cate={props.cate}/>
            <Comment></Comment>
        </div>
    </div>)
}


export const Content = (props) => {
    return (<section className="bg0 p-b-140 p-t-10">
        <div className="container">
            <div className="row justify-content-center">
                <MainContent post={props.post} cate={props.cate}></MainContent>
                <Sidebar/>
            </div>
        </div>
    </section>)
}
const saveRecentlyViewedNews = (news) => {
    if (news != null) {
        const recentlyViewedNews = sessionStorage.getItem('recentlyViewedNews');
        let newsList = recentlyViewedNews ? JSON.parse(recentlyViewedNews) : [];
        //Kiểm tra xem tin tức đã tồn tại trong danh sách hay chưa
        const existingNewsIndex = newsList.findIndex(item => item.link === news.link)
        if (existingNewsIndex !== -1) {
            newsList.splice(existingNewsIndex, 1);
            newsList.unshift(news);
        } else newsList.unshift(news); // Xóa tin tức đã tồn tại để đưa lên đầu danh sách

        sessionStorage.setItem('recentlyViewedNews', JSON.stringify(newsList));
    }
};

export function NewsDetails() {
    const data = useLoaderData();
    const memoizedUrl = useMemo(() => data.link, [data]);
    const [viewed, setViewed] = useState(null)
    const item = RssCate(data.cate).find(item => item.link.indexOf(data.link.substring(5)) !== -1);

    useEffect(() => {
        if (item) {
            setViewed(item)
            saveRecentlyViewedNews(viewed)
        }
    }, [viewed, item])

    const post = RssDetails(memoizedUrl);
    return (<div key={data.link}>
        {post ? (<div><Breadcrumb item={item} key={data} cate={data.cate} title={post.title}/>
            <Content key={post} post={post} cate={data.cate}/></div>) : (
            <Error404/>)}
    </div>)
}


