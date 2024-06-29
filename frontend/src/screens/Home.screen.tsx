import { Article } from '../classes/Article';
import { getArticles } from '../apis/articles.api';
import { useEffect, useState } from 'react';
import FeaturedArticles from '../components/Home/FeaturedArticles';

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

  return <FeaturedArticles articles={articles} />;
}

export default Home;
