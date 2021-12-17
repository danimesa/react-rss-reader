import { FeedList } from "./FeedList";
import * as feedData from "../apis/feeds";
import {useEffect, useState} from "react";

export const RssFeed = ({
    feedUrl,
    limits
}) => {
    const [feedSite, setFeedSite] = useState({});
    const [feedList, setFeedList] = useState([]);
    const [isLoading, setLoadState] = useState(false);

    useEffect(() => {
        setLoadState(true);
        feedData.getFeeds(feedUrl).then((feed) => {
            setFeedSite({
                title: feed.title,
                link: feed.link
                });
            setFeedList(feed.items.slice(0,limits));
            setLoadState(false);
        });
    }, [feedUrl,limits]);
    const reloadFeedList = () => {
        setLoadState(true);
        feedData.getFeeds(feedUrl).then((feed) => {
            setFeedSite({
                title: feed.title,
                link: feed.link
            });
            setFeedList(feed.items.slice(0,limits));
            setLoadState(false);
        });
    };

    return (
        <FeedList
            feedSite={feedSite}
            feedList={feedList}
            handleReload={reloadFeedList}
            isLoading={isLoading}
        />
    );
};
