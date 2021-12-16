import React from 'react';
import { Container } from "@chakra-ui/react";

import {RssFeed} from "./components/RssFeed";

const rssFeed = [
    {
        url: 'https://jp.techcrunch.com/feed/',
        limits: 10,
    },
]

function App() {
  return (
      <Container centerContent p={{ base: "4", md: "6" }} maxWidth="5xl">
          {rssFeed.map((entry, index) => (
              <RssFeed
                  feedUrl={entry.url}
                  limits={entry.limits}
                  key={index}
              />
          ))}
      </Container>
  );
}

export default App;
