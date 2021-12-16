import React, { memo } from "react";
import { List } from "@chakra-ui/react";

import { FeedTitle } from "./FeedTitle";
import { FeedItem } from "./FeedItem";

export const FeedList = memo(({feedSite, feedList, handleReload, isLoading}) => {
    return (
        <>
            <FeedTitle
                feedSite={feedSite}
                as="h1"
                fontSize={{ base: "2xl", md: "3xl" }}
                handleReload={handleReload}
                isLoading={isLoading}
            />
            {feedList.length !== 0 && (
                <List w="full">
                    {feedList.map((feed, index) => (
                        <FeedItem
                            feed={feed}
                            key={index}
                        />
                    ))}
                </List>
            )}
        </>
    );
});
