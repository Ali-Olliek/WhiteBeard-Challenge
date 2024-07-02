import { useContext } from 'react';
import { Article } from '../../classes/Article';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContext } from '../../context/ResponsiveContext';

interface IFeaturedArticle {
  article: Article;
  index: number;
}

function FeaturedArticle({ article, index }: IFeaturedArticle) {
  const navigate = useNavigate();

  const { isMobileView } = useContext(ResponsiveContext);

  const handleClickArticle = () => {
    navigate(`/article?articleId=${article.Id}`);
  };

  return (
    <>
      {isMobileView ? (
        <div className='grid-item'>
          <div className='mobile-card'>
            <img src={article.image.imageUrl} />
            <div className='card__content'>
              <p className='card__title'>{article.title}</p>
              <p className='card__description'>{article.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleClickArticle} className={`grid-item card`}>
          <img src={article.image.imageUrl} />
          <div className='card__content'>
            <p className='card__title'>{article.title}</p>
            <p className='card__description'>{article.content}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FeaturedArticle;
