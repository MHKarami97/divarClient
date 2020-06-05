export class State {
  public id: number;
  public name: string;
  public image: string;
}

export class StateWithSub {
  public id: number;
  public name: string;
  public childStates: State[];
}
