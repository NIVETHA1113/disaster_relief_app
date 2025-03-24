import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

function DisasterNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=disaster&apiKey=43ff2a1e453e4f798b309a4f79ab66fb")
      .then((response) => response.json())
      .then((data) => setNews(data.articles.slice(0, 5))) // Get top 5 news articles
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center">📰 Latest Disaster News</h2>
        <div className="list-group mt-4">
          {news.length > 0 ? (
            news.map((article, index) => (
              <a key={index} href={article.url} className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">
                <strong>{article.title}</strong> - {article.source.name}
              </a>
            ))
          ) : (
            <p className="text-center">Loading news...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DisasterNews;
