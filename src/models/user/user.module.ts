export class User {
  public id: number;
  public phoneNumber: string;
  public fullName: string;
}

export class UserCreate {
  public phoneNumber: string;
}

export class UserValidateCreate {
  public phoneNumber: string;
  public verifyCode: number;
}
