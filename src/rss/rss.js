import {useState, useEffect} from 'react';
import axios from 'axios';
import {parseString} from 'xml2js';

// doc link rss
export const RssCate = (cate) => {
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const url = `/api/${cate}.rss`;

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
                        const cleanedDescription = description.replace(/<\/?(a|img)[^>]*>/g, '');
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
        axios.get(titleUrl).then(response => {
            const $ = cheerio.load(response.data);

            console.log($('body'))
        }).catch(error => {
            console.log(error);
        });
    }, [titleUrl]);
    
    return newsDetail;
}
