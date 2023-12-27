export interface ProductCardInterface {
  imgUrl: string;
  productName: string;
  price: string;
  shortDescription: string;
  id: string;
  rating: number;
  onAddToCart: (value: string) => void;
}

export interface ProductInterface {
  imgUrl: string;
  name: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  rating: number;
  brand: string;
  id: number | string;
  options: string;
  sizes: string;
}

export interface GetAllProductsData {
  products: ProductInterface[];
}

export interface GetOneProductsData {
  product: ProductInterface;
}
