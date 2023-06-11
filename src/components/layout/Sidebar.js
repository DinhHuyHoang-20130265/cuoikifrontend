import {RssCate} from "../../rss/rss";
import {Link} from "react-router-dom";
import {catedatas} from "../../catedatas/cate-list";


const Subcrise = () =>{
    return(
<div><div className="how2 how2-cl4 flex-s-c m-b-35">
    <h3 className="f1-m-2 cl3 tab01-title">
        Đăng ký nhận tin
    </h3>
</div>
    <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-55">
        <h5 className="f1-m-5 cl0 p-b-10">
            Đăng ký nhận tin
        </h5>

        <p className="f1-s-1 cl0 p-b-25">
            Để nhận tin tức mới nhất hằng tháng.
        </p>

        <form className="size-a-9 pos-relative">
            <input className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55" type="text" name="email"
                   placeholder="Email"></input>

            <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                <i className="fa fa-arrow-right"></i>
            </button>
        </form>
    </div></div>
    )
}

export const LatestItem = ({item}) =>{
    return(
        <li className="flex-wr-sb-s p-b-30">
            <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`} className="size-w-10 wrap-pic-w hov1 trans-03">
                <img src={item.imageUrl} alt="IMG"/>
            </Link>

            <div className="size-w-11">
                <h6 className="p-b-4">

                    <Link to={`/${item.link.substring(20, item.link.indexOf(".htm"))}`} className="f1-s-5 cl3 hov-cl10 trans-03">
                        {item.title}
                    </Link>
                </h6>

                <span className="cl8 txt-center p-b-24">
											<span className="f1-s-3">
												{item.pubDate}
											</span>
										</span>
            </div>
        </li>
    )
}

const LatestNews = () =>{
    const list = RssCate("tin-moi-nhat")
    if (list.length < 1) {
        return (<div>Nothing</div>)
    }
    return(
        <div className="p-b-30">
            <div className="how2 how2-cl4 flex-s-c">
                <h3 className="f1-m-2 cl3 tab01-title">
                    Tin mới nhất
                </h3>
            </div>

            <ul className="p-t-35">
                {list.slice(0,5).map(item => <LatestItem item={item}/>)}
            </ul>
        </div>
    )
}

export const TagItem = ({item}) =>{
    return(
        <Link to={`/${item.cate}`}
           className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
            {item.name}
        </Link>
    )
}

const Tags = () =>{
    return(
        <div className="p-b-55">
            <div className="how2 how2-cl4 flex-s-c m-b-30">
                <h3 className="f1-m-2 cl3 tab01-title">
                    Từ khóa
                </h3>
            </div>

            <div className="flex-wr-s-s m-rl--5">
                {catedatas.slice(1,12).map(item => <TagItem item={item}/>)}
            </div>
        </div>
    )
}



const Sidebar = () =>{
    return(
        <div className="col-md-10 col-lg-4">
            <div className="p-l-10 p-rl-0-sr991 p-b-20">
                <div className="p-b-55">
                    <Subcrise/>
                    <LatestNews/>
                    <Tags/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;