import React from 'react';
import { Article } from '../../classes/Article';
import { Row } from 'antd';
import FeaturedArticle from './FeaturedArticle';
import './Home.css';
interface IFeaturedArticles {
  articles: Article[];
}

function FeaturedArticles({ articles }: IFeaturedArticles) {
  return (
    <div className='grid-container'>
      {articles.map((article, index) => (
        <FeaturedArticle key={article.Id} article={article} index={index} />
      ))}
    </div>
  );
}

export default FeaturedArticles;
