import {RssCate, RssDetails} from "../rss/rss";
import {Link, useLoaderData} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {catedatas} from "../catedatas/cate-list";
import ContentOfPost from "./ContentOfPost";
import Error404 from "./Error404";
import Sidebar from "./layout/Sidebar";
import {Comments, FacebookProvider} from "react-facebook";

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
        <a href={"#"} onClick={() => savedNews(props.item)} style={{fontSize: "24px"}}>
            <i className={"fa fa-bookmark"}
               style={{color: (isSaved ? "yellow" : "blue")}}></i></a>
    </div>)
}

export const Comment = (props) => {
    return (
        <FacebookProvider appId="649226417231505">
            {/*<Comments href={"/" + props.link.substring(5)}/> */}
            <Comments href={"https://news-website-e7591.web.app/" + props.link.substring(5)}/>
        </FacebookProvider>
    );
}

export const MainContent = (props) => {
    return (<div className="col-md-10 col-lg-8 p-b-30">
        <div className="p-r-10 p-r-0-sr991">
            <ContentOfPost post={props.post} cate={props.cate}/>
            <Comment link={props.link}></Comment>
        </div>
    </div>)
}


export const Content = (props) => {
    return (<section className="bg0 p-t-10">
        <div className="container">
            <div className="row justify-content-center">
                <MainContent link={props.link} post={props.post} cate={props.cate}></MainContent>
                <Sidebar/>
                <SameNews link={props.link}></SameNews>
            </div>
        </div>
    </section>)
}
export const SameItem = ({item}) => {
    return (
        <div style={{marginRight: "50px"}}>
            <div className="m-b-45" style={{width: "250px"}}>
                <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`}
                      className="wrap-pic-w hov1 trans-03">
                    <img src={item.imageUrl} alt="IMG"/>
                </Link>

                <div className="p-t-16">
                    <h5 className="p-b-5">
                        <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`}
                              className="f1-m-3 cl2 hov-cl10 trans-03">
                            {item.title}
                        </Link>
                    </h5>

                    <span className="cl8">
                  <span className="f1-s-3"> {item.pubDate}</span>
                </span>
                </div>
            </div>
        </div>
    )
}
export const SameNews = ({link}) => {
    const [cate, setCate] = useState(null);
    useEffect(() => {
        setCate(link.substring(5, link.lastIndexOf("/")))
    }, [cate])

    const list = RssCate(cate).filter(item => item.link.indexOf(link.substring(5)) === -1).slice(0, 4);

    return (
        <section className="bg0">
            <div className="p-t-4 p-b-40" style={{textAlign: "center", fontWeight: "bold"}}>
                <h2 className="f1-l-1 cl2">Tin tức tương tự</h2>
            </div>
            <div className="col-md-10 col-lg-8">
                <div style={{display: "inline-flex", marginLeft: "50px"}}>
                    {list ? list.map(item => <SameItem item={item}/>) : <p>Loading</p>}
                </div>
            </div>
        </section>
    )
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
            <Content link={data.link} key={post} post={post} cate={data.cate}/></div>) : (
            <Error404/>)}
    </div>)
}


