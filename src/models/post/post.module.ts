import { Image } from './image.module';
import { Tag } from './tag.module';

export class Post {
  public id: number;
  public title: string;
  public categoryName: string;
  public stateName: string;
  public time: string;
  public location: string;
  public phone: string;
  public price: number;
  public images: Image[];
  public tags: Tag[];
  public isFavorite: boolean;
}

export class PostCreate {
  public title: string;
  public categoryId: number;
  public stateId: number;
  public location: string;
  public phone: string;
  public price: number;
  public images: Array<File>;
  public tags: Tag[];
}

export class PostShort {
  public id: number;
  public title: string;
  public categoryName: string;
  public stateName: string;
  public time: string;
  public image: string;
  public price: number;
}
