import React, { useState, useEffect } from "react";
import fetcher from "../../../utils/fetcher";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const newsApi = process.env.REACT_APP_NEWS_API
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY

  useEffect(() => {
    fetcher(`${newsApi}${newsApiKey}`)
      .then((response) => setNewsData(response.articles));
  }, []);

  console.log(newsData);

  return <div></div>;
};
export default News;
