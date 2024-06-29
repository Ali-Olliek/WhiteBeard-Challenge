import { Base } from './Base';

export class ArticleImage extends Base {
  public articleId: number;
  public imageUrl: string;
  public imageDescription: string;
  constructor(image: any) {
    super(image);
    this.articleId = image.article_id;
    this.imageUrl = image.image_url;
    this.imageDescription = image.image_description;
  }
}
