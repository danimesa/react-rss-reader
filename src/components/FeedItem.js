import React, { memo } from "react";
import { ListItem, Text, Flex, Link, Heading, HStack } from "@chakra-ui/react";
import moment from 'moment';
import 'moment/locale/ja';

export const FeedItem = memo(({ feed }) => {
    return (
        <ListItem
            borderWidth="1px"
            p="4"
            mt="4"
            bg="white"
            borderRadius="md"
            borderColor="gray.300"
        >
            <Heading as='h2' size='md'>
                <Link mb="6" href={feed.link} isExternal>
                    {feed.title}
                </Link>
            </Heading>
            <HStack spacing='24px'>
                <Text fontSize='sm'>{feed.creator}</Text>
                <Text fontSize='sm'>{moment(feed.isoDate).format('YYYY/MM/DD(ddd) HH:mm')}</Text>
            </HStack>
            <Flex alignItems="center" justifyContent="flex-end">
                <Text fontSize='md' noOfLines={3}>{feed['content:encodedSnippet']}</Text>
            </Flex>
        </ListItem>
    );
});
