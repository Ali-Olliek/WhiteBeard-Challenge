import React from 'react';
import { Article } from '../../classes/Article';

interface IFeaturedArticle {
  article: Article;
}

function FeaturedArticle({ article }: IFeaturedArticle) {
  return <div>FeaturedArticle</div>;
}

export default FeaturedArticle;
