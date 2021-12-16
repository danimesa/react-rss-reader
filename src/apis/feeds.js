import axios from "axios";
const feedDataUrl = "http://localhost:3001/api/feeds";
export const getFeeds = async (feedUrl) => {
    const response = await axios.get(feedDataUrl+'/'+encodeURIComponent(feedUrl));
    return response.data;
};
