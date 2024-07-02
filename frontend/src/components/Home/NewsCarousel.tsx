import React, { useContext } from 'react';
import { Article } from '../../classes/Article';
import { PaginatorContext } from '../../context/paginationContext';
import CarouselArticle from './CarouselArticle';
import { ResponsiveContext } from '../../context/ResponsiveContext';
interface INewsCarouselProps {
  articles: Article[];
}

function NewsCarousel({ articles }: INewsCarouselProps) {
  const { setPage, page } = useContext(PaginatorContext);
  const { isMobileView } = useContext(ResponsiveContext);

  const handlePageChange = (action: 'left' | 'right') => {
    if (action === 'left') {
      setPage(page - 1);
    }
    if (action === 'right') {
      setPage(page + 1);
    }
  };

  return (
    <>
      {isMobileView ? (
        <div className='carousel-container mobile'>
          {articles.map((article) => (
            <CarouselArticle key={article.Id} article={article} />
          ))}
        </div>
      ) : (
        <div className='carousel-container'>
          <div className='carousel'>
            <div className='carousel-control'>
              <div>
                <button
                  onClick={() => handlePageChange('left')}
                  className='left'
                >
                  &#60;
                </button>
                <button
                  onClick={() => handlePageChange('right')}
                  className='right'
                >
                  &#62;
                </button>
              </div>
            </div>
            <div className='carousel-flex'>
              {articles.map((article) => (
                <CarouselArticle key={article.Id} article={article} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NewsCarousel;
