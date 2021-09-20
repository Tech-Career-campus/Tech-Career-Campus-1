import React, { useState, useEffect } from "react";
import "./news.css";
import Ticker from "react-ticker";
import CircularProgress from "@material-ui/core/CircularProgress";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const newsApi = process.env.REACT_APP_NEWS_API;
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    fetch(`${newsApi}${newsApiKey}`)
      .then(response => response.json())
      .then((response) => setNewsData(response?.articles))
      .catch(err => console.log(err))
  }, [newsApi,newsApiKey]);

  console.log(newsData);

  return!newsData.length ? (
    <CircularProgress />
  
 ) : (
    <div className="BodyNew">
      <div className="news-ticker-div">
        <Ticker mode="smooth" direction="toRight">
          {({ index }) => (
            <div className="card-news">
              <h1>{newsData[index].source.name}</h1>
              <h1>{newsData[index].description}</h1>
              <h1>{newsData[index].title}</h1>
              <img src={newsData[index].urlToImage} alt="" />
            </div>
          )}
        </Ticker>

      </div>
</div>
    

  );
};
export default News;
