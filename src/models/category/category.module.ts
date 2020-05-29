export class Category {
  public id: number;
  public name: string;
  public image: string;
}

export class CategoryWithSyb {
  public id: number;
  public name: string;
  public image: string;
  public childCategories: Category[];
}
