import { Article } from '../../classes/Article';
import { Col } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface IFeaturedArticle {
  article: Article;
  index: number;
}

function FeaturedArticle({ article, index }: IFeaturedArticle) {
  const navigate = useNavigate();

  const handleClickArticle = () => {
    navigate(`/article?articleId=${article.Id}`);
  };

  return (
    <div onClick={handleClickArticle} className={`grid-item card`}>
      <img src={article.image.imageUrl} />
      <div className='card__content'>
        <p className='card__title'>{article.title}</p>
        <p className='card__description'>{article.content}</p>
      </div>
    </div>
  );
}

export default FeaturedArticle;
