const axios = require('axios');
const { decode } = require('html-entities');

exports.handler = async () => {
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const options = {
    params: {
      key: process.env.API_KEY,
      channelId: 'UCkcE1FOArrDlPkVlsUFFO_w',
      part: 'snippet,id',
      order: 'date',
      maxResults: 10,
    },
  };
  const { data } = await axios.get(url, options);
  const filtered = data.items.filter(x => x.snippet.liveBroadcastContent !== 'live');
  const video = filtered[0];
  const title = decode(video.snippet.title);
  const videoId = video.id.videoId;
  return `"${title}" https://www.youtube.com/watch?v=${videoId}`;
};
