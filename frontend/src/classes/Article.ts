import { ArticleImage } from './ArticleImage';
import { ArticleMetric } from './ArticleMetric';
import { Author } from './Author';
import { Base } from './Base';

export class Article extends Base {
  public title: string;
  public author: Author;
  public content: string;
  public authorId: number;
  public categoryId: number;
  public publishDate: Date;
  public image: ArticleImage;
  public metrics: ArticleMetric[];
  constructor(article: any) {
    super(article);
    this.image = article.image;
    this.title = article.title;
    this.author = article.author;
    this.metrics = article.metrics;
    this.content = article.content;
    this.authorId = article.author_id;
    this.categoryId = article.category_id;
    this.publishDate = article.publish_date;
  }

  public static URI: string = 'articles';
}
