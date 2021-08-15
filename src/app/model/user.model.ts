export class User {
  id?: number;
  nom: string | undefined;
  email: string | undefined;
  tel?: string | undefined;
  role?: string | undefined;
  token?: string;
  password?: string;
  confirmPassword?: string;
}
