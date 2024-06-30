import React from 'react';
import { Article } from '../../classes/Article';
import { Row } from 'antd';
import FeaturedArticle from './FeaturedArticle';

interface IFeaturedArticles {
  articles: Article[];
}

function FeaturedArticles({ articles }: IFeaturedArticles) {
  return (
    <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      {articles.map((article, index) => (
        <FeaturedArticle key={article.Id} article={article} index={index} />
      ))}
    </Row>
  );
}

export default FeaturedArticles;
