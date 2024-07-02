import React, { useContext } from 'react';
import { Article } from '../../classes/Article';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContext } from '../../context/ResponsiveContext';

interface ICarouselArticle {
  article: Article;
}

function CarouselArticle({ article }: ICarouselArticle) {
  const navigate = useNavigate();
  const { isMobileView } = useContext(ResponsiveContext);

  const handleClickArticle = () => {
    navigate(`/article?articleId=${article.Id}`);
  };

  return (
    <div
      onClick={handleClickArticle}
      className={`card ${isMobileView ? 'mobile' : ''}`}
    >
      <img src={article.image.imageUrl} />
      <div className={`card__content ${isMobileView ? 'mobile' : ''}`}>
        <p className={`card__title ${isMobileView ? 'mobile' : ''}`}>
          {article.title}
        </p>
        <p className={`card__description ${isMobileView ? 'mobile' : ''}`}>
          {article.content}
        </p>
      </div>
    </div>
  );
}

export default CarouselArticle;
