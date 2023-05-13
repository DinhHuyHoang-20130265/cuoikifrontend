import React from "react";
export const Header = () => {
    return (
        <header>
            <div className="container-menu-desktop">
                <div className="topbar">
                    <div className="content-topbar container h-100">
                        <div className="left-topbar">
						<span className="left-topbar-item flex-wr-s-c">
							<span>
								New York, NY
							</span>
                            <img className="m-b-1 m-rl-8" alt="IMG"></img>
							<span>
								HI 58° LO 56°
							</span>
						</span>
                            <a href="#" className="left-topbar-item">
                                About
                            </a>
                            <a href="#" className="left-topbar-item">
                                Contact
                            </a>
                            <a href="#" className="left-topbar-item">
                                Sing up
                            </a>
                            <a href="#" className="left-topbar-item">
                                Log in
                            </a>
                        </div>

                        <div className="right-topbar">
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
                        </div>
                    </div>
                </div>

                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a><img alt="IMG-LOGO"></img></a>
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
						<span className="left-topbar-item flex-wr-s-c">
							<span>
								New York, NY
							</span>
                            <img className="m-b-1 m-rl-8" alt="IMG"></img>
							<span>
								HI 58° LO 56°
							</span>
						</span>
                        </li>

                        <li className="left-topbar">
                            <a href="#" className="left-topbar-item">
                                About
                            </a>

                            <a href="#" className="left-topbar-item">
                                Contact
                            </a>

                            <a href="#" className="left-topbar-item">
                                Sing up
                            </a>

                            <a href="#" className="left-topbar-item">
                                Log in
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
                            <a >Home</a>
                            <ul className="sub-menu-m">
                                <li><a >Homepage v1</a></li>
                                <li><a >Homepage v2</a></li>
                                <li><a >Homepage v3</a></li>
                            </ul>

                            <span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
                        </li>

                        <li>
                            <a >News</a>
                        </li>

                        <li>
                            <a >Entertainment </a>
                        </li>

                        <li>
                            <a >Business</a>
                        </li>

                        <li>
                            <a >Travel</a>
                        </li>

                        <li>
                            <a >Life Style</a>
                        </li>

                        <li>
                            <a >Video</a>
                        </li>

                        <li>
                            <a href="#">Features</a>
                            <ul className="sub-menu-m">
                                <li><a >Category Page v1</a></li>
                                <li><a >Category Page v2</a></li>
                                <li><a >Blog Grid Sidebar</a></li>
                                <li><a>Blog List Sidebar v1</a></li>
                                <li><a>Blog List Sidebar v2</a></li>
                                <li><a >Blog Detail Sidebar</a></li>
                                <li><a>Blog Detail No Sidebar</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>

                            <span className="arrow-main-menu-m">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</span>
                        </li>
                    </ul>
                </div>
                <div className="wrap-logo container">
                    <div className="logo">
                        <a ><img  alt="LOGO"></img></a>
                    </div>

                    <div className="banner-header">
                        <a href="https://themewagon.com/themes/free-bootstrap-4-html5-news-website-template-magnews2/"><img
                             alt="IMG"></img>
                        </a>
                    </div>
                </div>
                <div className="wrap-main-nav">
                    <div className="main-nav">
                        <nav className="menu-desktop">
                            <a className="logo-stick" >
                                <img  alt="LOGO"></img>
                            </a>
                            <ul className="main-menu">
                                <li className="mega-menu-item main-menu-active">
                                    <a >News</a>

                                    <div className="sub-mega-menu">
                                        <div className="nav flex-column nav-pills" role="tablist">
                                            <a className="nav-link active" data-toggle="pill" 
                                               role="tab">All</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Entertaiment</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Fashion</a>
                                            <a className="nav-link" data-toggle="pill"  role="tab">Life
                                                Style</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Technology</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Travel</a>
                                        </div>

                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="news-0" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">

                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img  alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>

                                                    <div className="col-3">
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img  alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Finance
																</a>

																<span className="f1-s-3 m-rl-3">
																	-
																</span>

																<span className="f1-s-3">
																	Jan 15
																</span>
															</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mega-menu-item">
                                    <a >News</a>

                                    <div className="sub-mega-menu">
                                        <div className="nav flex-column nav-pills" role="tablist">
                                            <a className="nav-link active" data-toggle="pill" 
                                               role="tab">All</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Entertaiment</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Fashion</a>
                                            <a className="nav-link" data-toggle="pill"  role="tab">Life
                                                Style</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Technology</a>
                                            <a className="nav-link" data-toggle="pill" 
                                               role="tab">Travel</a>
                                        </div>

                                        <div className="tab-content">
                                            <div className="tab-pane show active" id="news-0" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>

                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img  alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
																<a href="#" className="f1-s-6 cl8 hov-cl10 trans-03">
																	Finance
																</a>

																<span className="f1-s-3 m-rl-3">
																	-
																</span>

																<span className="f1-s-3">
																	Jan 15
																</span>
															</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-4" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane" id="news-5" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-3">
                                                        {/* Item post */}
                                                        <div>
                                                            <a 
                                                               className="wrap-pic-w hov1 trans-03">
                                                                <img alt="IMG"></img>
                                                            </a>

                                                            <div className="p-t-10">
                                                                <h5 className="p-b-5">
                                                                    <a 
                                                                       className="f1-s-5 cl3 hov-cl10 trans-03">
                                                                        Donec metus orci, malesuada et lectus vitae
                                                                    </a>
                                                                </h5>

                                                                <span className="cl8">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
)
}