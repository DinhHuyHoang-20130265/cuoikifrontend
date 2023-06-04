import React, {useState} from "react";
import footer from "./watermark/footer.png";
import {RssCate} from "../../rss/rss";
import {Link} from "react-router-dom";
import {catedatas} from "../../catedatas/cate-list";


const FooterCateItem = (data) => {
    const [item, setItem] = useState(data)
    return (
        <li className="how-bor1 p-rl-5 p-tb-10">
            <Link to={`${item.cate}`} className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                {item.name}
            </Link>
        </li>
    )
}
const FooterItem = (data) => {
    const [item, setItem] = useState(data)
    return (
        <li className="flex-wr-sb-s p-b-20">
            <Link to={`news/${item.link}`} className="size-w-4 wrap-pic-w hov1 trans-03">
                <img alt="IMG" src={item.imageUrl}></img>
            </Link>
            <div className="size-w-5">
                <h6 className="p-b-5">
                    <Link to={`news/${item.link}`} className="f1-s-5 cl11 hov-cl10 trans-03">
                        {item.title}
                    </Link>
                </h6>
                <span className="f1-s-3 cl6"></span>
            </div>
        </li>
    )
}

export const Footer = () => {
    const list = RssCate("tin-moi-nhat")
    return (
        <div>
            <footer>
                <div className="bg2 p-t-40 p-b-25">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <a>
                                        <img className="max-s-full" src={footer} alt="LOGO"></img>
                                    </a>
                                </div>
                                <div>
                                    <p className="f1-s-1 cl11 p-b-16">
                                        Chào mừng bạn đến với trang tin tức NLU!
                                        Luôn cung cấp cho bạn những thông tin mới nhất
                                        và chính xác về tất cả các lĩnh vực: chính trị, kinh tế,
                                        giáo dục, khoa học, công nghệ và nhiều lĩnh vực khác.
                                    </p>
                                    <p className="f1-s-1 cl11 p-b-16">
                                        Liên hệ với chúng tôi qua email: <a
                                        href={"mailto: 20130265@st.hcmuaf.edu.vn"}>20130265@st.hcmuaf.edu.vn</a>
                                    </p>
                                    <div className="p-t-15">
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-facebook-f"></span>
                                        </a>
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-twitter"></span>
                                        </a>
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-pinterest-p"></span>
                                        </a>
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-vimeo-v"></span>
                                        </a>
                                        <a href="#" className="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                                            <span className="fab fa-youtube"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">
                                        Tin mới nhất
                                    </h5>
                                </div>
                                <ul>
                                    {
                                        list.slice(0, 3).map(item => <FooterItem title={item.title}
                                                                                 imageUrl={item.imageUrl}
                                                                                 pubDate={item.pubDate}
                                                                                 link={item.link}/>)}
                                </ul>
                            </div>
                            <div className="col-sm-6 col-lg-4 p-b-20">
                                <div className="size-h-3 flex-s-c">
                                    <h5 className="f1-m-7 cl0">
                                        Các danh mục
                                    </h5>
                                </div>

                                <ul className="m-t--12">
                                    {catedatas.slice(0, 4).map(item => <FooterCateItem cate={item.cate}
                                                                                       name={item.name}/>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
                <span className="fas fa-angle-up"></span>
            </span>
            </div>
            <div className="modal fade" id="modal-video-01" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document" data-dismiss="modal">
                    <div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>
                </div>
            </div>
        </div>
    )
}