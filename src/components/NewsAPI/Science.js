
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'
require('dotenv').config()

const Science = () => {

  const [articleData, setArticleData] = useState({articles:[]});

  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setArticleData(result.data);
      console.log(result.data)
    };
    fetchData();
  }, [url]);



  return (
    <>
    <div className="container pt-5">
    <p className="title is-1 pb-3 has-text-white">U.S. Science</p>
    <div className="columns">
   
  <div className="column is-full p-4">
<div className="columns  
is-mobile
is-flex-wrap-nowrap
scrolling-wrapper
scrollbar-hidden"   >
      {articleData.articles && articleData.articles.map((article, articleIndex) => (

<div className="column is-one-quarter box m-1  " key={articleIndex} >
<Content
url={article.url}
name={article.source.name}
urlToImage={article.urlToImage}
publishedAt={article.publishedAt}
title={article.title}content={article.content}
description={article.description}
/>
  </div>
))}
 </div>
  </div>
</div>
</div>

    </>
  );
};
export default Science;