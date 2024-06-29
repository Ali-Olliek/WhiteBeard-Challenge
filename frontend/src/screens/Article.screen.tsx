import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Article as ArticleClass } from '../classes/Article';
import { getArticle } from '../apis/articles.api';
import { EyeOutlined, HeartOutlined } from '@ant-design/icons';
import { like, view } from '../apis/interactions.api';
import { Tooltip } from 'antd';

function Article() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const articleId = queryParams.get('articleId');

  const [article, setArticle] = useState<ArticleClass>();
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    const registerView = async () => {
      if (!articleId) return;

      await view(parseInt(articleId));
    };

    fetchArticle();
    registerView();
  }, [articleId]);

  const fetchArticle = async () => {
    if (!articleId) return;

    const article = await getArticle(articleId);

    setArticle(article);
  };

  const handleLike = async () => {
    if (!articleId) return;

    await like(parseInt(articleId));

    fetchArticle();
  };

  if (!article) return <h1>loading</h1>;

  return (
    <Container.Main>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          margin: 20,
          alignItems: 'center',
        }}
      >
        <div style={{ marginInline: 10 }}>
          <Tooltip title={article.likesCount}>
            <HeartOutlined
              onClick={handleLike}
              style={{ fontSize: '36px', color: 'red', cursor: 'pointer' }}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title={article.viewsCount}>
            <EyeOutlined style={{ fontSize: '36px' }} />
          </Tooltip>
        </div>
      </div>
      <Container.Card backgroundImage={article.image.imageUrl}></Container.Card>
      <Container.ArticleHeader>
        <h3>{article?.title}</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
          }}
        >
          <p>{article?.publishDate.toLocaleDateString()}</p>
          <p>
            Written by <b>{article.author.name}</b>
          </p>
        </div>
      </Container.ArticleHeader>
      <Container.Content>
        <p>{article.content}</p>
      </Container.Content>
    </Container.Main>
  );
}

export default Article;

const Container = {
  Main: styled.div`
    margin-top: 10%;
    margin-inline: 10%;
    border: 1px solid black;
  `,
  Card: styled.div<{ backgroundImage: string }>`
    margin: 5%;
    border: 1px solid black;
    padding: 5px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    height: 200px;
    color: white;
    position: relative;
    background-image: url(${(props) => props.backgroundImage});
  `,
  ArticleHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding-inline: 20px;
  `,
  Content: styled.div`
    padding-inline: 20px;
  `,
};
