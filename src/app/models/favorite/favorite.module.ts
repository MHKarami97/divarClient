import { PostImage } from '../post/image.module';

export class Favorite {
  public id: number;
  public postId: number;
  public postTitle: string;
  public postCategoryName: string;
  public postStateName: string;
  public postTime: string;
  public postImages: PostImage[];
  public postPrice: number;
  public postType: number;
}

export class FavoriteCreate {
  public id: number;
  public postId: number;
}