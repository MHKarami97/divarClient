export class Chat {
  public id: number;
  public text: string;
  public time: string;
  public creatorId: number;
  public answererId: number;
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

export class ChatPost {
  public userId: number;
  public postId: number;
  public postTitle: string;
  public comment: Chat[];
}
