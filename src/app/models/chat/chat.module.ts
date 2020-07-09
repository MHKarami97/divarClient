export class Chat {
  public id: number;
  public postId: number;
  public postTitle: string;
  public text: string;
  public time: string;
}

export class ChatCreate {
  public id: number;
  public postId: number;
  public text: string;
}

export class ChatShort {
  public id: number;
  public postId: number;
  public postTitle: string;
}
