export type login = {
  email: string;
  password: string;
};

export type response = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};


export type StudetnDto = {
  name: string;
  lastName: string;
  email: string;
  dni: string;
  birthDate: string;
  tel: string;
}