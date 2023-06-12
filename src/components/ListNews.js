import {RssCate} from "../rss/rss";
import {Link, useLoaderData} from "react-router-dom";
import {catedatas} from "../catedatas/cate-list";
import {useEffect, useState} from "react";
import Error404 from "./Error404";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import Sidebar from "./layout/Sidebar";

let cate = "";
export const Breadcrumb = (params) => {
    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                <div className="f2-s-1 p-r-30 m-tb-6 d-flex" >
                    <Link to={"/home"} className="breadcrumb-item f1-s-3 cl9">
                        Trang chủ
                    </Link>
                    <span
                        className="breadcrumb-item f1-s-3 cl9">{catedatas.find(item => item.cate === params.cate).name}</span>
                </div>
                <div className="pos-relative size-a-2 of-hidden bocl11 m-tb-6">
                </div>
            </div>
        </div>
    )
}

export const PageHeading = (params) => {
    return (
        <div className="container p-t-4">
            <h2 className="f1-l-1 cl2">
                {params.name}
            </h2>
        </div>
    )
}
export const PostItem = (params) => {
    return (<div className="col-sm-6 p-r-25 p-r-15-sr991">
        <div className="m-b-45">
            <Link to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}
                  className="wrap-pic-w hov1 trans-03">
                <img src={params.imageUrl} alt="IMG"/>
            </Link>

            <div className="p-t-16">
                <h5 className="p-b-5">
                    <Link
                        to={`/${params.link.substring(20, params.link.indexOf(".htm"))}`}
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
    const [selectedOption, setSelectedOption] = useState("1");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentList, setCurrentList] = useState(null);
    const [searchKey, setSearch] = useState("");
    const [filtered, setFilteredList] = useState(null);
    const [typeSearch, setTypeSearch] = useState(null);
    useEffect(() => {
        setCurrentPage(1);
        setTypeSearch(0);
    }, [params]);

    const list = RssCate(cate.cate);

    useEffect(() => {
        if (list) {
            let filteredList = list.filter(item => item.title.toUpperCase().indexOf(searchKey.toUpperCase()) !== -1).sort((a, b) => {
                return (selectedOption === "2") ? new Date(a.pubDate) - new Date(b.pubDate) : new Date(b.pubDate) - new Date(a.pubDate)
            });
            setFilteredList(filteredList)
            let indexOfLastPost = currentPage * 6;
            let indexOfFirstPost = indexOfLastPost - 6;
            let currentPosts = filteredList.slice(indexOfFirstPost, indexOfLastPost);
            setCurrentList(currentPosts);
        }
    }, [list, currentPage, searchKey, selectedOption]);


    function handlePageClick(page) {
        setCurrentPage(page);
    }

    function search(text) {
        setSearch(text)
        setCurrentPage(1);
    }

    const {transcript, listening, resetTranscript} = useSpeechRecognition();

    const reset = () => {
        resetTranscript();
        setSearch("");
    }
    const startListening = () => {
        SpeechRecognition.startListening({continuous: true});
    };
    const changeSearch = () => {
        if (typeSearch === 0)
            setTypeSearch(1)
        else setTypeSearch(0);
        reset()
        setSearch("");
    }
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setSearch(transcript)
    };

    const changeOrder = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="col-md-10 col-lg-8 p-b-80">
            <div className={"d-flex"} style={{justifyContent:"space-between"}}>
                {typeSearch === 0 ? (<div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6 m-b-30">
                    <input key={0} className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-20" type="text" name="search"
                           placeholder="Tìm tin tức..." onChange={e => search(e.target.value)}
                    />
                    <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </div>) : (<div className={"pos-relative bo-1-rad-22 of-hidden bocl11 m-tb-6 m-b-30"} style={{display: "inline-flex"}}>
                    <input key={1} className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-20" type="text" name="search"
                           placeholder={`${!listening ? "Nhấn để nói..." : "Hãy nói gì đó..."}`} value={transcript}/>
                    {searchKey && (
                        <button onClick={reset} className={"m-l--4"} style={{marginRight:"8px",fontSize:"18px", fontWeight:"400"}}>
                            x
                        </button>
                    )}
                    <button onClick={!listening ? startListening : stopListening} style={{marginRight:"8px"}}>
                        <i className={`fa ${!listening ? "fa-microphone" : "fa-search"}`}></i>
                    </button>
                    {/*<button onClick={() => {setSearch(transcript)}} className={"m-l--4"} style={{marginRight:"8px"}}>*/}
                    {/*    <i className={"fa fa-search"}></i>*/}
                    {/*</button>*/}
                </div>)}
                <div className={"pos-relative bo-1-rad-22 of-hidden m-tb-6 m-b-30"} style={{border:"none", padding:"6px"}} >
                    <button onClick={changeSearch} style={{fontSize:"22px"}}>
                        {typeSearch === 0 ? (<i className={"fa fa-microphone"}></i>):(<i className={"zmdi zmdi-search-for"}></i>)}
                    </button>
                </div>
                <select className={"select size-a-2 bo-1-rad-5 of-hidden bocl11 m-tb-6 m-b-30"} onChange={changeOrder}>
                    <option value="1" selected={true}>Mới nhất</option>
                    <option value="2">Cũ nhất</option>
                </select>
            </div>
            {currentList && <ListPost key={cate.cate} list={currentList}></ListPost>}
            {currentList && (
                <Pagination numb={filtered.length > 6 ? filtered.length : currentList.length} currentPage={currentPage}
                            handlePageClick={handlePageClick}></Pagination>
            )}
            {!currentList &&
                <h4 style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}> Đang hiển thị danh
                    sách theo danh mục tương ứng... </h4>}
        </div>
    )
}

export const Post = (params) => {
    return (
        <section className="bg0 p-t-10 p-b-55">
            <div className="container">
                <div className="row justify-content-center">
                    <PostLeft key={cate.cate} cate={params.cate}></PostLeft>
                    <Sidebar/>
                </div>
            </div>
        </section>
    )
}

export function ListNews() {
    const cate = useLoaderData();
    console.log(typeof cate)
    return (cate ? <div>
        <Breadcrumb cate={cate.cate}></Breadcrumb>
        <PageHeading name={cate.name}></PageHeading>
        <Post key={cate.cate} cate={cate.cate}></Post>
    </div> : <Error404/>)
}

export async function loadList({params}) {
    const cate = catedatas.find(item => item.cate === params.cate);
    console.log(cate)
    return (typeof cate === 'undefined' ? null : cate);
}