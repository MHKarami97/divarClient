import { Image } from './image.module';
import { Tag } from './tag.module';
export class Post extends Base {
  public Title: string;
  public CategoryName: string;
  public StateName: string;
  public Time: string;
  public Location: string;
  public Phone: string;
  public Price: string;
  public Images: Image[];
  public Tags: Tag[];
  public IsFavorite: boolean;
}

export class PostShort extends Base {
  public Title: string;
  public CategoryName: string;
  public StateName: string;
  public Time: string;
  public Image: string;
}
