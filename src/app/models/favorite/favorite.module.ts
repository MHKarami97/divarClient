import { PostImage } from '../post/image.module';

export class Favorite {
  public id: number;
  public postTitle: string;
  public images: PostImage[];
  public PostId: number;
}

export class FavoriteCreate {
  public id: number;
  public postId: number;
}