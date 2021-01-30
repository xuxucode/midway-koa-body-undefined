/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}
