import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Article as ArticleClass } from '../classes/Article';
import { getArticle } from '../apis/articles.api';
import { EyeOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { like, view } from '../apis/interactions.api';
import { Tooltip } from 'antd';
import FloatButtonMenu from '../components/Common/FloatButtonMenu';
import LocalStorageService from '../services/LocalStorageService';
import './../components/Article/ArticlePage.css';

function Article() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const articleId = queryParams.get('articleId');
  const localStorageService = new LocalStorageService();
  const [isLiked, setIsLiked] = useState<boolean>(
    localStorageService.isLiked(parseInt(articleId ? articleId : '0'))
  );

  const [article, setArticle] = useState<ArticleClass>();
  const pageURL = window.location.href;

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

    localStorageService.save(parseInt(articleId));
    setIsLiked(true);
    await like(parseInt(articleId));

    fetchArticle();
  };

  if (!article) return <h1>loading</h1>;
  console.log(article.publishDate.toLocaleDateString());
  return (
    <div className='main'>
      <FloatButtonMenu
        twitter={{ url: pageURL, text: article.title }}
        facebook={{ url: pageURL, quote: article.title }}
      />
      <div className='image-container'>
        <img src={article.image.imageUrl} className='back-image' />
        <div className='article-content'>
          <div className='article-details'>
            <h1>{article.title}</h1>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                <div style={{ marginInline: 10 }}>
                  <Tooltip title={article.likesCount}>
                    {isLiked ? (
                      <HeartFilled
                        disabled
                        style={{
                          fontSize: '36px',
                          color: 'red',
                          cursor: 'pointer',
                        }}
                      />
                    ) : (
                      <HeartOutlined
                        onClick={handleLike}
                        style={{
                          fontSize: '36px',
                          color: 'red',
                          cursor: 'pointer',
                        }}
                      />
                    )}
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title={article.viewsCount}>
                    <EyeOutlined style={{ fontSize: '36px', color: 'black' }} />
                  </Tooltip>
                </div>
              </div>
              <p>{article.publishDate.toLocaleDateString()}</p>
              <p>By: {article.author.name}</p>
            </div>
          </div>
          <div className='article-paragraphs'>
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
