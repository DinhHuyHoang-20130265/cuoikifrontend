import {RssCate} from "../rss/rss";
import {useState} from "react";
import {Link} from "react-router-dom";
import {catedatas} from "../catedatas/cate-list";
import {useDispatch} from "react-redux";
import banner from "./layout/watermark/banner_nlu.jpg";

const Element = (data) => {
    const [itemElement, setItem] = useState(data)
    const list = RssCate(itemElement.cate)
    if (list.length < 1) {
        return (<div></div>)
    }
    return (
        <div className="p-b-20">
            <div className="tab01 p-b-20">
                <div className="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
                    <h3 className="f1-m-2 cl12 tab01-title">
                        {itemElement.name}
                    </h3>
                    <Link to={`/${itemElement.cate}`} className="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
                        Xem tất cả tin
                        <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                    </Link>
                </div>

                <div className="tab-content p-t-35">
                    <div className="tab-pane fade show active" id="tab1-1" role="tabpanel">
                        <div className="row">
                            <MainPost title={list[0].title} imageUrl={list[0].imageUrl}
                                      pubDate={list[0].pubDate} link={list[0].link} cate={itemElement.cate}/>
                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {list.slice(1, 4).map(item => <ItemPost title={item.title} imageUrl={item.imageUrl}
                                                                        pubDate={item.pubDate} link={item.link}
                                                                        cate={itemElement.cate}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainPost = (data) => {
    return (<div className="col-sm-6 p-r-25 p-r-15-sr991">
        <div className="m-b-30">
            <Link to={`/${data.cate}/${data.link.substring(data.link.lastIndexOf("/") + 1, data.link.indexOf(".htm"))}`}
                  className="wrap-pic-w hov1 trans-03">
                <img src={data.imageUrl} alt="IMG"></img>
            </Link>
            <div className="p-t-20">
                <h5 className="p-b-5">
                    <Link
                        to={`/${data.cate}/${data.link.substring(data.link.lastIndexOf("/") + 1, data.link.indexOf(".htm"))}`}
                        className="f1-m-3 cl2 hov-cl10 trans-03">
                        {data.title}
                    </Link>
                </h5>

                <span className="cl8">
                    <span className="f1-s-3">
                        {data.pubDate.substring(0, data.pubDate.indexOf(" "))}
                    </span>
                </span>
            </div>
        </div>
    </div>)
}
const ItemPost = (data) => {
    return (<div className="flex-wr-sb-s m-b-30">
        <Link to={`/${data.cate}/${data.link.substring(data.link.lastIndexOf("/") + 1, data.link.indexOf(".htm"))}`}
              className="size-w-1 wrap-pic-w hov1 trans-03">
            <img src={data.imageUrl} alt="IMG"></img>
        </Link>

        <div className="size-w-2">
            <h5 className="p-b-5">
                <Link
                    to={`/${data.cate}/${data.link.substring(data.link.lastIndexOf("/") + 1, data.link.indexOf(".htm"))}`}
                    className="f1-s-5 cl3 hov-cl10 trans-03">
                    {data.title}
                </Link>
            </h5>

            <span className="cl8">
                <span className="f1-s-3">
                   {data.pubDate.substring(0, data.pubDate.indexOf(" "))}
                </span>
            </span>
        </div>
    </div>)
}

export const Post = () => {
    return (
        <section className="bg0 p-t-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        {catedatas.slice(0, 3).map(item => <Element cate={item.cate} name={item.name}/>)}
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            <div>
                                <div className="how2 how2-cl4 flex-s-c">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Các bài báo nổi bật nhất
                                    </h3>
                                </div>

                                <ul className="p-t-35">
                                    <li className="flex-wr-sb-s p-b-22">
                                        <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                            1
                                        </div>

                                        <a href="#" className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
                                            Lorem
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

                            {/*  */}
                            <div className="flex-c-s p-t-8">
                                <a href="#">
                                    <img className="max-w-full" src="images/banner-02.jpg" alt="IMG"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export const Banner = () => {
    return (
        <div className="container">
            <div className="flex-c-c">
                <a href="#">
                    <img style={{height: "100px"}} src={banner} alt="IMG"></img>
                </a>
            </div>
        </div>
    )
}

export const Latest = () => {
    return (
        <section className="bg0 p-t-60 p-b-35">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 p-b-20">
                        <div className="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
                            <h3 className="f1-m-2 cl3 tab01-title">
                                Latest Articles
                            </h3>
                        </div>

                        <div className="row p-t-35">
                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-01.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 18
										</span>
									</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-02.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 16
										</span>
									</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-03.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 15
										</span>
									</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-04.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 13
										</span>
									</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-05.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 10
										</span>
									</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                {/* Item latest */}
                                <div className="m-b-45">
                                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                                        <img src="images/latest-06.jpg" alt="IMG"></img>
                                    </a>

                                    <div className="p-t-16">
                                        <h5 className="p-b-5">
                                            <a href="blog-detail-01.html" className="f1-m-3 cl2 hov-cl10 trans-03">
                                                You wish lorem ipsum dolor sit amet consectetur
                                            </a>
                                        </h5>

                                        <span className="cl8">
										<a href="#" className="f1-s-4 cl8 hov-cl10 trans-03">
											by John Alvarado
										</a>

										<span className="f1-s-3 m-rl-3">
											-
										</span>

										<span className="f1-s-3">
											Feb 09
										</span>
									</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4">
                        <div className="p-l-10 p-rl-0-sr991 p-b-20">
                            {/* Video */}
                            <div className="p-b-55">
                                <div className="how2 how2-cl4 flex-s-c m-b-35">
                                    <h3 className="f1-m-2 cl3 tab01-title">
                                        Subcrise
                                    </h3>
                                </div>

                                {/* Subscribe */}
                                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
                                    <h5 className="f1-m-5 cl0 p-b-10">
                                        Subscribe
                                    </h5>

                                    <p className="f1-s-1 cl0 p-b-25">
                                        Get all latest content delivered to your email a few times a month.
                                    </p>

                                    <form className="size-a-9 pos-relative">
                                        <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email"
                                               placeholder="Email"></input>

                                        <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </form>
                                </div>

                                {/* Tag */}
                                <div className="p-b-55">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export const Home = () => {
    return (
        <div>
            <Post/>
            <Banner/>
            <Latest/>
        </div>
    )
}