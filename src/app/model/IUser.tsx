export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IAdress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export const UserDefaultState = {
  id: 0,
  name: "",
  userName: "",
  email: "",
  phone: "",
  website: "",
  address: {
    city: "",
    street: "",
    SUITE: "",
    ZIPCODE: ""
  },
  company: {
    COMPANYNAME: "",
    COMPANYCATCHPHRASE: "",
    COMPANYBS: ""
  }
};
