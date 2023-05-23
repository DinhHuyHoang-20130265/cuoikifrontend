export function loadList({params}) {
    console.log(params)
}

export const listNews =
    [{title: 2}, {title: 3}]


export const Breadcrumb = () => {
    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6">
                    <a href="index.html" className="breadcrumb-item f1-s-3 cl9">
                        Home
                    </a>

                    <a href="category-02.html" className="breadcrumb-item f1-s-3 cl9">
                        Category
                    </a>

                    <span className="breadcrumb-item f1-s-3 cl9">
					Entertaiment
				</span>
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

export const PageHeading = () => {
    return (
        <div className="container p-t-4 p-b-40">
            <h2 className="f1-l-1 cl2">
                Entertaiment
            </h2>
        </div>
    )
}

export const Feature = () => {
    return (
        <section className="bg0">
            <div className="container">
                <div className="row m-rl--1">
                    <div className="col-md-6 p-rl-1 p-b-2">
                        <div className="bg-img1 size-a-3 how1 pos-relative"
                             // style="background-image: url(images/entertaiment-01.jpg);"
                        >
                            <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                            <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                <a href="#"
                                   className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                    Celebrity
                                </a>

                                <h3 className="how1-child2 m-t-14 m-b-10">
                                    <a href="blog-detail-01.html"
                                       className="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
                                        Music quisque at ipsum vel orci eleifend ultrices
                                    </a>
                                </h3>

                                <span className="how1-child2">
								<span className="f1-s-4 cl11">
									Jack Sims
								</span>

								<span className="f1-s-3 cl11 m-rl-3">
									-
								</span>

								<span className="f1-s-3 cl11">
									Feb 16
								</span>
							</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 p-rl-1">
                        <div className="row m-rl--1">
                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-14 how1 pos-relative"
                                     // style="background-image: url(images/entertaiment-02.jpg);"
                                >
                                    <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#"
                                           className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            Game
                                        </a>

                                        <h3 className="how1-child2 m-t-14">
                                            <a href="blog-detail-01.html"
                                               className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                Pellentesque dui nibh, pellen-tesque ut dapibus ut
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-14 how1 pos-relative"
                                     // style="background-image: url(images/entertaiment-03.jpg);"
                                >
                                    <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#"
                                           className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            Music
                                        </a>

                                        <h3 className="how1-child2 m-t-14">
                                            <a href="blog-detail-01.html"
                                               className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                Motobike Vestibulum vene-natis purus nec nibh volutpat
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-14 how1 pos-relative"
                                     // style="background-image: url(images/entertaiment-04.jpg);"
                                >
                                    <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#"
                                           className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            Game
                                        </a>

                                        <h3 className="how1-child2 m-t-14">
                                            <a href="blog-detail-01.html"
                                               className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                Pellentesque dui nibh, pellen-tesque ut dapibus ut
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 p-rl-1 p-b-2">
                                <div className="bg-img1 size-a-14 how1 pos-relative"
                                     // style="background-image: url(images/entertaiment-05.jpg);"
                                >
                                    <a href="blog-detail-01.html" className="dis-block how1-child1 trans-03"></a>

                                    <div className="flex-col-e-s s-full p-rl-25 p-tb-20">
                                        <a href="#"
                                           className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
                                            Music
                                        </a>

                                        <h3 className="how1-child2 m-t-14">
                                            <a href="blog-detail-01.html"
                                               className="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
                                                Motobike Vestibulum vene-natis purus nec nibh volutpat
                                            </a>
                                        </h3>
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

export const ListPost = () => {
    return (
        <div className="row">
            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/entertaiment-06.jpg" alt="IMG"/>
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
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/entertaiment-07.jpg" alt="IMG"/>
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
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/entertaiment-08.jpg" alt="IMG"/>
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
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/entertaiment-09.jpg" alt="IMG"/>
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
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/latest-05.jpg" alt="IMG"/>
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
                <div className="m-b-45">
                    <a href="blog-detail-01.html" className="wrap-pic-w hov1 trans-03">
                        <img src="images/latest-06.jpg" alt="IMG"/>
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
    )
}

export const Pagination = () => {
    return (
        <div className="flex-wr-s-c m-rl--7 p-t-15">
            <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7 pagi-active">1</a>
            <a href="#" className="flex-c-c pagi-item hov-btn1 trans-03 m-all-7">2</a>
        </div>
    )
}

export const PostLeft = () => {
    return (
        <div className="col-md-10 col-lg-8 p-b-80">
            <ListPost></ListPost>
            <Pagination></Pagination>
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

export const Post = () => {
    return (
        <section className="bg0 p-t-70 p-b-55">
            <div className="container">
                <div className="row justify-content-center">
                    <PostLeft></PostLeft>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    )
}

export function ListNews() {
    return (<div>
        <Breadcrumb></Breadcrumb>
        <PageHeading></PageHeading>
        <Feature></Feature>
        <Post></Post>
    </div>)
}
