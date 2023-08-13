export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'c8a6c1f466mshc4d88c7e144c97dp1c46c1jsn7cd45ac10618',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '853e0085dbmsh132ba8079d90a49p1f72b5jsn177b34dd8215',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url,options) => {
  const response = await fetch(url,options);
  const data = await response.json();
  return data;
};