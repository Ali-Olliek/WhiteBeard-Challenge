import { Article } from './Article';
import { Base } from './Base';

export class ArticleCategory extends Base {
  public name: string;
  public icon: string;
  public articles?: Article[];
  constructor(category: any) {
    super(category);
    this.name = category.name;
    this.icon = category.icon;
    this.articles = category.articles;
  }
}
