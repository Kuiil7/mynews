
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from '../Content'
require('dotenv').config()

const Entertainment = () => {

  const [articleData, setArticleData] = useState({articles:[]});

  const entertainmentEndPoint = `http://localhost:5000/entertainment`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(entertainmentEndPoint);
      setArticleData(result.data);
      console.log(result.data)
    };
    fetchData();
  }, [entertainmentEndPoint]);


  return (
    <>
    <div className="container pt-5">
    <p className="title is-1-desktop is-3-mobile p-3 has-text-white">U.S. Entertainment</p>
    <div className="columns">

  <div className="column is-full p-4">
<div className="columns
is-mobile
is-flex-wrap-nowrap
scrolling-wrapper
scrollbar-hidden">

{articleData.articles && articleData.articles.map((article, articleIndex) => (
<div className="column
is-three-quarters-mobile
is-two-thirds-tablet
is-half-desktop
is-one-third-widescreen
is-one-quarter-fullhd
box
m-1  " key={articleIndex} >
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
export default Entertainment;