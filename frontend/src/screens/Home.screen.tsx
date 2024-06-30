import { Article } from '../classes/Article';
import { getArticles } from '../apis/articles.api';
import { useEffect, useState } from 'react';
import FeaturedArticles from '../components/Home/FeaturedArticles';
import styled from 'styled-components';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles({
        paginate: true,
        per_page: 6,
        page: 1,
      });

      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className='articles-container'>
      <FeaturedArticles articles={articles} />
    </div>
  );
}

export default Home;
