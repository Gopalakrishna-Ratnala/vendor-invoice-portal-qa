export interface Credentials {
  username: string;
  password: string;
  expectedError?: string;
}

export interface Product {
  name: string;
  price: string;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  postalCode: string;
  expectedError?: string;
}
