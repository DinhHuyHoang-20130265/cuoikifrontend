import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {catedatas} from "../catedatas/cate-list";
import loudspeaker from "../img/loudspeaker.png";
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
        <Link to={`/${props.cate}`} className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase">
            {catedatas.find(item => item.cate === props.cate).name}
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

        <div className="flex-s-s p-t-12 p-b-15">
								<span className="f1-s-12 cl5 m-r-8">
									Tags:
								</span>
            <div className="flex-wr-s-s size-w-0">
                <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                    Streetstyle
                </a>

                <a href="#" className="f1-s-12 cl8 hov-link1 m-r-15">
                    Crafts
                </a>
            </div>
        </div>

        <div className="flex-s-s">
								<span className="f1-s-12 cl5 p-t-1 m-r-15">
									Share:
								</span>

            <div className="flex-wr-s-s size-w-0">
                <a href="#"
                   className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                    <i className="fab fa-facebook-f m-r-7"></i>
                    Facebook
                </a>

                <a href="#"
                   className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                    <i className="fab fa-twitter m-r-7"></i>
                    Twitter
                </a>

                <a href="#"
                   className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                    <i className="fab fa-google-plus-g m-r-7"></i>
                    Google+
                </a>

                <a href="#"
                   className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03">
                    <i className="fab fa-pinterest-p m-r-7"></i>
                    Pinterest
                </a>
            </div>
        </div>
    </div>)
}

export default ContentOfPost