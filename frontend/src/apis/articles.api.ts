import { Article } from '../classes/Article';
import unAuthenticatedApi from '../config/api';
import { PayloadService, Params } from '../services/PayloadService';

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
  featured?: boolean;
}

const API = unAuthenticatedApi;

const index = async (params?: IArticleFilter) => {
  try {
    const Payload = new PayloadService('URLSearchParams');

    Payload.convert(params as Params);

    const result = await API.get(
      `${Article.URI}?${Payload.payload.toString()}`
    );

    const mappedArticles = result.data.data.map(
      (article: any) => new Article(article)
    );

    return mappedArticles;
  } catch (error) {
    throw error;
  }
};

const show = async (id: string) => {
  try {
    const result = await API.get(Article.URI + '/' + id);

    const mappedArticle = new Article(result.data.data);

    return mappedArticle;
  } catch (error) {
    throw error;
  }
};

export { index as getArticles, show as getArticle };
