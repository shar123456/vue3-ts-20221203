export interface Ilogin{
    user:string, password:string,loginType:string
}

export interface IFormRegisterState {
    user: string;
    password: string;
    passwordCheck: string;
    code: number|undefined;
  }