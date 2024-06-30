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
        per_page: 5,
        page: 1,
      });

      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <Container.Main>
      <div>
        <FeaturedArticles articles={articles} />
      </div>
    </Container.Main>
  );
}

export default Home;

const Container = {
  Main: styled.div`
    margin-top: 10%;
  `,
};