export class Category {
  public id: number;
  public name: string;
  public image: string;
}

export class CategoryWithSub {
  public id: number;
  public name: string;
  public image: string;
  public childCategories: Category[];
}
