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
  public images: Image[];
  public price: number;
  public type: number;
}
