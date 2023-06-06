import React from "react";
import watermark from "./watermark/watermark.png";
import {catedatas} from "../../catedatas/cate-list";
import {CateItem} from "./item-header";
import {Link} from "react-router-dom";

const ItemOther = (data) => {
    return (
        <li><Link to={`${data.cate}`}>{data.name}</Link></li>
    )
}

export const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="topbar">
                    <div className="content-topbar container h-100">
                        <div className="left-topbar">
                            <a href={"#"} className="left-topbar-item">
                                Giới thiệu
                            </a>
                            <a href={"#"} className="left-topbar-item">
                                Liên hệ
                            </a>
                        </div>

                        <div className="right-topbar">
                            <a href={"#"}>
                                <span className="fab fa-facebook-f"></span>
                            </a>
                            <a href={"#"}>
                                <span className="fab fa-twitter"></span>
                            </a>
                            <a href={"#"}>
                                <span className="fab fa-pinterest-p"></span>
                            </a>
                            <a href={"#"}>
                                <span className="fab fa-vimeo-v"></span>
                            </a>
                            <a href={"#"}>
                                <span className="fab fa-youtube"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <Link to={"/home"}><img src={watermark} alt="IMG-LOGO"></img></Link>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
                    </div>
                </div>
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li className="left-topbar">
                            <a href="#" className="left-topbar-item">
                                Giới thiệu
                            </a>

                            <a href="#" className="left-topbar-item">
                                Liên hệ
                            </a>

                        </li>

                        <li className="right-topbar">
                            <a href="#">
                                <span className="fab fa-facebook-f"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-twitter"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-pinterest-p"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-vimeo-v"></span>
                            </a>

                            <a href="#">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                    </ul>

                    <ul className="main-menu-m">
                        <li>
                            <Link to={`home`}>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to={`tin-moi-nhat`}>Tin mới nhất</Link>
                        </li>
                        <li>
                            <Link to={`thoi-su`}>Thời sự</Link>
                        </li>
                        <li>
                            <Link to={`thoi-su-quoc-te`}>Thời sự quốc tế</Link>
                        </li>
                        <li>
                            <Link to={`cong-doan`}>Công đoàn</Link>
                        </li>
                        <li>
                            <Link to={`ban-doc`}>Bạn đọc </Link>
                        </li>

                        <li>
                            <a href="#">Khác</a>
                            <ul className="sub-menu-m">
                                {catedatas.slice(5, catedatas.length - 1).map(cate =>
                                    <ItemOther cate={cate.cate} name={cate.name}/>
                                )}
                            </ul>

                            <span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
                        </li>
                    </ul>
                </div>
                <div className="wrap-logo container">
                    <div className="logo">
                        <Link to={"/home"}><img src={watermark} alt="LOGO"></img></Link>
                    </div>

                </div>
                <div className="wrap-main-nav">
                    <div className="main-nav">
                        <nav className="menu-desktop">
                            <Link to={"/home"} className="logo-stick">
                                <img alt="LOGO" src={watermark}></img>
                            </Link>
                            <ul className="main-menu">
                                {catedatas.slice(0, 5).map(cate => <CateItem name={cate.name} cate={cate.cate}/>)}
                                <li>
                                    <a href="#">Khác</a>
                                    <ul className="sub-menu">
                                        {catedatas.slice(5, catedatas.length - 1).map(cate =>
                                            <ItemOther cate={cate.cate} name={cate.name}/>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}