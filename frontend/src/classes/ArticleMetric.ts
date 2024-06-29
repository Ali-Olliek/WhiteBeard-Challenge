import { Base } from './Base';

export class ArticleMetric extends Base {
  public articleId: number;
  public type: 'like' | 'view';
  constructor(metric: any) {
    super(metric);
    this.articleId = metric.article_id;
    this.type = metric.type;
  }
}
