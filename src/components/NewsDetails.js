import {RssDetails} from "../rss/rss";
import {Link, useLoaderData} from "react-router-dom";
import {useMemo, useState} from "react";
import {catedatas} from "../catedatas/cate-list";
import ContentOfPost from "./ContentOfPost";
import {Comments, FacebookProvider} from "react-facebook";

export function loadDetails({params}) {
    const link = `/api/` + params.cate + "/" + params.title + ".htm";
    return {link: link, cate: params.cate, title: params.title};
}

export const Breadcrumb = (props) => {
    return (<div className="container" style={{display:"flex"}}>
        <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
            <div className="f2-s-1 p-r-30 m-tb-6" style={{display:"flex"}}>
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
    </div>)
}

export const Comment = (props) => {
    return (
        <FacebookProvider appId="649226417231505">
            <Comments href={"https://nld.com.vn/" + props.link.substring(5)}/>
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

export const Category = () => {
    return (<div className="p-b-60">
        <div className="how2 how2-cl4 flex-s-c">
            <h3 className="f1-m-2 cl3 tab01-title">
                Category
            </h3>
        </div>

        <ul className="p-t-35">
            <li className="how-bor3 p-rl-4">
                <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                    Fashion
                </a>
            </li>

            <li className="how-bor3 p-rl-4">
                <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                    Beauty
                </a>
            </li>

            <li className="how-bor3 p-rl-4">
                <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                    Street Style
                </a>
            </li>

            <li className="how-bor3 p-rl-4">
                <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                    Life Style
                </a>
            </li>

            <li className="how-bor3 p-rl-4">
                <a href="#" className="dis-block f1-s-10 text-uppercase cl2 hov-cl10 trans-03 p-tb-13">
                    DIY & Crafts
                </a>
            </li>
        </ul>
    </div>)
}

export const Archive = () => {
    return (<div className="p-b-37">
        <div className="how2 how2-cl4 flex-s-c">
            <h3 className="f1-m-2 cl3 tab01-title">
                Archive
            </h3>
        </div>

        <ul className="p-t-32">
            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											July 2018
										</span>

                    <span>
											(9)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											June 2018
										</span>

                    <span>
											(39)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											May 2018
										</span>

                    <span>
											(29)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											April  2018
										</span>

                    <span>
											(35)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											March 2018
										</span>

                    <span>
											(22)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											February 2018
										</span>

                    <span>
											(32)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											January 2018
										</span>

                    <span>
											(21)
										</span>
                </a>
            </li>

            <li className="p-rl-4 p-b-19">
                <a href="#" className="flex-wr-sb-c f1-s-10 text-uppercase cl2 hov-cl10 trans-03">
										<span>
											December 2017
										</span>

                    <span>
											(26)
										</span>
                </a>
            </li>
        </ul>
    </div>)
}

export const PopularPosts = () => {
    return (<div className="p-b-30">
        <div className="how2 how2-cl4 flex-s-c">
            <h3 className="f1-m-2 cl3 tab01-title">
                Popular Post
            </h3>
        </div>

        <ul className="p-t-35">
            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-04.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Music
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 18
											</span>
										</span>
                </div>
            </li>

            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-05.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Game
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 16
											</span>
										</span>
                </div>
            </li>

            <li className="flex-wr-sb-s p-b-30">
                <a href="#" className="size-w-10 wrap-pic-w hov1 trans-03">
                    <img src="images/popular-post-06.jpg" alt="IMG"/>
                </a>

                <div className="size-w-11">
                    <h6 className="p-b-4">
                        <a href="blog-detail-02.html" className="f1-s-5 cl3 hov-cl10 trans-03">
                            Donec metus orci, malesuada et lectus vitae
                        </a>
                    </h6>

                    <span className="cl8 txt-center p-b-24">
											<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
												Celebrity
											</a>

											<span className="f1-s-3 m-rl-3">
												-
											</span>

											<span className="f1-s-3">
												Feb 12
											</span>
										</span>
                </div>
            </li>
        </ul>
    </div>)
}

export const Tags = () => {
    return (<div>
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

            <a href="#"
               className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                Crafts
            </a>

            <a href="#"
               className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                Magazine
            </a>

            <a href="#"
               className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                News
            </a>

            <a href="#"
               className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
                Blogs
            </a>
        </div>
    </div>)
}

export const Sidebar = () => {
    return (<div className="col-md-10 col-lg-4 p-b-30">
        <div className="p-l-10 p-rl-0-sr991 p-t-70">
            <Category></Category>
            <Archive></Archive>
            <PopularPosts></PopularPosts>
            <Tags></Tags>
        </div>
    </div>)
}

export const Content = (props) => {
    return (<section className="bg0 p-b-140 p-t-10">
        <div className="container">
            <div className="row justify-content-center">
                <MainContent link={props.link} post={props.post} cate={props.cate}></MainContent>
                <Sidebar></Sidebar>
            </div>
        </div>
    </section>)
}
export function NewsDetails() {
    const data = useLoaderData();
    const memoizedUrl = useMemo(() => data.link, [data]);
    const post = RssDetails(memoizedUrl);
    return (<div key={data.link}>
        {post ? (<div><Breadcrumb key={data} cate={data.cate} title={post.title}/>
            <Content link={data.link} key={post} post={post} cate={data.cate}/></div>) : (
            <h4 style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}> Đang hiển thị chi
                tiết... </h4>)}
    </div>)
}
