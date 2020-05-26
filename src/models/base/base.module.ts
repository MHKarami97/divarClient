interface IBase<T> {
  id: T;
}

abstract class BaseId implements IBase<number> {
  id: number;
}
