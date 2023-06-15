import {useState, useEffect} from 'react';
import axios from 'axios';
import {parseString} from 'xml2js';

// doc link rss
export const RssCate = (cate) => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const url = `/api/${cate}.rss`;
        // const url = `https://api.allorigins.win/raw?url=https://nld.com.vn/${cate}.rss`;

        axios.get(url).then(response => {
            const xml = response.data;
            parseString(xml, (err, result) => {
                if (err)
                    console.error(err);
                else {
                    const list = result.rss.channel[0].item.map(item => {
                        const description = item.description[0];
                        const imageUrlRegex = /<img.*?src="(.*?)"/;
                        const imageUrlMatch = description.match(imageUrlRegex);
                        const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
                        const cleanedDescription = description.replace(/<\/?(a|img)[^>]*>/g, '').replace(/&#\d+;/g, '');
                        return {
                            title: item.title[0],
                            link: item.link[0],
                            description: cleanedDescription,
                            pubDate: item.pubDate[0],
                            guid: item.guid[0],
                            imageUrl: imageUrl
                        }
                    });
                    setFeeds(list);
                }
            })
        }).catch(error => {
            console.error(error);
        });
    }, [cate]);
    return feeds;
}

export const RssDetails = (titleUrl) => {
    const [newsDetail, setNewsDetail] = useState(null);
    const cheerio = require('cheerio');

    useEffect(() => {
        async function getPost() {
            await axios.get(titleUrl).then(response => {
                // await axios.get(`https://api.allorigins.win/raw?url=https://nld.com.vn/` + titleUrl.substring(5)).then(response => {
                const $ = cheerio.load(response.data);
                const title = $("h1.title-content").text();
                const date = $("p.dateandcat.clearfix").text();
                const sapo = $("h2.sapo-detail").text();
                const video_link = $("div[type=VideoStream].VCSortableInPreviewMode").attr("data-vid");
                const contents = $("div.content-news-detail").contents()
                const range = document.createRange();
                const entryBodyFragment = range.createContextualFragment(contents);
                const result = {
                    title: title,
                    date: date,
                    sapo: sapo,
                    contents: entryBodyFragment,
                    video_link: video_link
                }
                setNewsDetail(result)
            }).catch(error => {
                console.log(error);
            });
        }

        getPost();
    }, [titleUrl, cheerio]);
    return newsDetail;
}
