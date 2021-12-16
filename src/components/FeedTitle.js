import React, { memo } from "react";
import { Flex, Box, Spacer, Heading, Link, IconButton } from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons'

export const FeedTitle = memo(({ feedSite, as, fontSize, mt, handleReload, isLoading }) => {
  return (
    <Flex w="full">
      <Box p='2'>
        <Heading mt={mt} as={as} fontSize={fontSize} w="full">
          <Link href={feedSite.link} isExternal>
                      {feedSite.title}
                  </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box p='2'>
        <IconButton isLoading={isLoading} onClick={() => {handleReload();}} aria-label='reload' icon={<RepeatIcon />}/>
      </Box>
    </Flex>
  );
});
