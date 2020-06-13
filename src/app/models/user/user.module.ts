export class User {
  public id: number;
  public phoneNumber: string;
  public fullName: string;
}

export class UserCreate {
  public email: string;
  public password: string;
  public passwordVerify: string;
}

export class UserLogin {
  public email: string;
  public password: string;
}

export class UserLoginResult {
  public access_token: string;
  public refresh_token: string;
}

export class UserValidateCreate {
  public phoneNumber: string;
  public verifyCode: number;
}
