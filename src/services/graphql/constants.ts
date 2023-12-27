import { gql } from "@apollo/client";

export const productTypeDefs = gql`
extend type Product {
    imgUrl: String;
    name: String;
    price: String;
    longDescription: String;
    rating: String;
    brand: String;
    options: String;
    sizes: String;
    id: String;
}
`;
