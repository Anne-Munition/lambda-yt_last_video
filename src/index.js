const axios = require('axios');

exports.handler = async () => {
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const options = {
    params: {
      key: process.env.API_KEY,
      channelId: 'UCkcE1FOArrDlPkVlsUFFO_w',
      part: 'snippet,id',
      order: 'date',
      maxResults: 1,
    },
  };
  const { data } = await axios.get(url, options);
  const video = data.items[0];
  const title = video.snippet.title;
  const videoId = video.id.videoId;
  return `"${title}" https://www.youtube.com/watch?v=${videoId}`;
};
