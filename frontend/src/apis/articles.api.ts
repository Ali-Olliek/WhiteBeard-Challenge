import { Article } from '../classes/Article';
import unAuthenticatedApi from '../config/api';

interface IArticleFilter {
  per_page?: number;
  paginate?: boolean;
  page?: number;
  sort?: {
    by?: string;
    direction?: 'desc' | 'asc';
  };
  category_id?: number;
  author_id?: number;
}

const index = async (params?: IArticleFilter) => {
  try {
    const api = unAuthenticatedApi; // Add authenticated api here
    const urlParams = convertToURLParams(params);
    const result = await api.get(`${Article.URI}?${urlParams}`);

    const mappedArticles = result.data.data.map(
      (article: any) => new Article(article)
    );

    return mappedArticles;
  } catch (error) {
    throw error;
  }
};

const show = async (id: number) => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.get(Article.URI + '/' + id);

    const mappedArticle = new Article(result.data.data);

    return mappedArticle;
  } catch (error) {
    throw error;
  }
};

const convertToURLParams = (filter?: IArticleFilter): string => {
  const params = new URLSearchParams();

  // Add primitive fields
  filter?.per_page && params.append('per_page', filter?.per_page?.toString());
  filter?.paginate && params.append('paginate', filter?.paginate?.toString());
  filter?.page && params.append('page', filter?.page?.toString());
  filter?.category_id &&
    params.append('category_id', filter?.category_id?.toString());
  filter?.author_id &&
    params.append('author_id', filter?.author_id?.toString());

  // Add nested object fields
  filter?.sort?.by && params.append('sort_by', filter?.sort?.by);
  filter?.sort?.direction &&
    params.append('sort_direction', filter?.sort?.direction);

  return params.toString();
};

export { index as getArticles, show as getArticle };
