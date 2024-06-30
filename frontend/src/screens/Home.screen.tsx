import { Article } from '../classes/Article';
import { getArticles } from '../apis/articles.api';
import { useContext, useEffect, useState } from 'react';
import NewsCarousel from '../components/Home/NewsCarousel';
import { PaginatorContext } from '../context/paginationContext';
import FeaturedArticles from '../components/Home/FeaturedArticles';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [carouselArticles, setCarouselArticles] = useState<Article[]>([]);
  const { page } = useContext(PaginatorContext);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      const articles = await getArticles({
        paginate: true,
        per_page: 6,
        page: 1,
      });

      setArticles(articles);
    };

    fetchFeaturedArticles();
  }, []);

  useEffect(() => {
    const fetchCarouselArticles = async () => {
      const articles = await getArticles({
        paginate: true,
        per_page: 4,
        page: page,
      });

      setCarouselArticles(articles);
    };

    fetchCarouselArticles();
  }, [page]);

  return (
    <>
      <div className='articles-container'>
        <FeaturedArticles articles={articles} />
      </div>
      <div>
        <NewsCarousel articles={carouselArticles} />
      </div>
    </>
  );
}

export default Home;
