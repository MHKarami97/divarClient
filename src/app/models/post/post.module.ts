
import { Tag } from './tag.module';
import { PostImage } from './image.module';

export class Post {
  public id: number;
  public title: string;
  public categoryName: string;
  public stateName: string;
  public time: string;
  public location: string;
  public phone: string;
  public price: number;
  public images: PostImage[];
  public tags: Tag[];
  public isFavorite: boolean;
  public text: string;
  public view: number;
}

export class PostCreate {
  public title: string;
  public categoryId: number;
  public type: number;
  public text: string;
  public stateId: number;
  public location: string;
  public phone: string;
  public price: number;
}

export class PostShort {
  public id: number;
  public title: string;
  public categoryName: string;
  public stateName: string;
  public time: string;
  public images: PostImage[];
  public price: number;
  public type: number;
}
