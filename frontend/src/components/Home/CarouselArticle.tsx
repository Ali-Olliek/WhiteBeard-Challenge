import React from 'react';
import { Article } from '../../classes/Article';
import { useNavigate } from 'react-router-dom';

interface ICarouselArticle {
  article: Article;
}

function CarouselArticle({ article }: ICarouselArticle) {
  const navigate = useNavigate();

  const handleClickArticle = () => {
    navigate(`/article?articleId=${article.Id}`);
  };

  return (
    <div onClick={handleClickArticle} className={`card`}>
      <img src={article.image.imageUrl} />
      <div className='card__content'>
        <p className='card__title'>{article.title}</p>
        <p className='card__description'>{article.content}</p>
      </div>
    </div>
  );
}

export default CarouselArticle;
