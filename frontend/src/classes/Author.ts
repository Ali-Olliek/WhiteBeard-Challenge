import { Article } from './Article';
import { Base } from './Base';

export class Author extends Base {
  public name: string;
  public articles?: Article[];
  constructor(author: any) {
    super(author);
    this.name = author.name;
    this.articles = author.articles;
  }
}
