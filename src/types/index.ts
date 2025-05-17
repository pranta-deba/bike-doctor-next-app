export type TService = {
  _id?: string;
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  tags: string[];
};


export type TBooking = {
  _id: string;
  name: string;
  date: string;
  email: string;
  dueAmount: number;
  phone: string;
  address: string;
  service_id: string;
  service_name: string;
  service_price: number;
  service_img: string;
};
