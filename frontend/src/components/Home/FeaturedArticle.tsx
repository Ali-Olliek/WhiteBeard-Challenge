import React, { CSSProperties } from 'react';
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
    <StyledCol
      onClick={handleClickArticle}
      className='gutter-row'
      span={index === 0 ? 24 : 12}
      backgroundImage={article.image.imageUrl}
      article={article}
    >
      <Title>{article.title}</Title>
      <ArticleContent>{article.content}</ArticleContent>
    </StyledCol>
  );
}

export default FeaturedArticle;

const StyledCol = styled(Col)<{ backgroundImage: string; article: Article }>`
  border: 1px solid black;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: white;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

`;

const ArticleContent = styled.p`
  display: none;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    display: block
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  margin: 0;


`;
