import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {catedatas} from "../catedatas/cate-list";
import Speech from "./Speech/Speech";

function ContentOfPost(props) {
    const [speakContent, setSpeak] = useState("");
    const content = props.post;
    const contentRef = useRef(null);
    const datacontent = content.contents
    useEffect(() => {
        if (contentRef.current && datacontent instanceof Node) {
            const contentElement = contentRef.current;
            while (contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            contentRef.current.appendChild(datacontent)
            const paragraphs = contentElement.querySelectorAll('p');
            let speakData = content.sapo + ", " + Array.from(paragraphs).map((p) => p.textContent).join(", ");
            setSpeak(speakData)
        }
    }, [datacontent]);
    return (<div className="p-b-70">
        <Link to={`/${catedatas.findIndex(item => item.cate === props.cate) !== -1 ? props.cate : "#"}`}
              className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
            {catedatas.findIndex(item => item.cate === props.cate) !== -1 ? catedatas.find(item => item.cate === props.cate).name : props.cate}
        </Link>
        <h3 className="f1-l-3 cl2 p-b-20 p-t-33 respon2">
            {content.title}
        </h3>
        <div className="flex-wr-s-s p-b-17" style={{alignItems: "center"}}>
								<span className="f1-s-3 cl8 m-r-15">
									<span>
										{content.date}
									</span>
								</span>
            <Speech text={speakContent}/>
        </div>
        <h5 className={"sapo p-b-15"}>{content.sapo}</h5>

        <div className={"main-content"} ref={contentRef}/>


        <div className="flex-s-s m-t-40">
								<span className="f1-s-12 cl5 p-t-1 m-r-15">
									Chia sẻ:
								</span>

            <div className="flex-wr-s-s size-w-0">
                <ShareFbButton/>

                <ShareTwitterButton/>
            </div>
        </div>
    </div>)
}

function ShareFbButton() {
    const handleFbShare = () => {
        const urlToShare = "https://nld.com.vn" + sessionStorage.getItem("link"); // URL của tin tức muốn chia sẻ
        // const urlToShare = "https://news-website-e7591.web.app" + sessionStorage.getItem("link");
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
        window.open(facebookShareUrl, '_blank');
    };

    return (
        <a onClick={handleFbShare}
           className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
           style={{color: "white"}}>
            <i className="fab fa-facebook-f m-r-7"></i>
            Facebook
        </a>
    );
}

function ShareTwitterButton() {
    const ShareTwitterButton = () => {
        const urlToShare = "https://nld.com.vn" + sessionStorage.getItem("link"); // URL của tin tức muốn chia sẻ
        // const urlToShare = "https://news-website-e7591.web.app" + sessionStorage.getItem("link");
        const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(urlToShare)}`;
        window.open(twitterShareUrl, '_blank');
    };

    return (
        <a onClick={ShareTwitterButton}
           className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
           style={{color: "white"}}>
            <i className="fab fa-twitter m-r-7"></i>
            Twitter
        </a>
    );
}


export default ContentOfPost