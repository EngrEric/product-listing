import { gql } from "@apollo/client";

export const productsQuery = {
  GET_ALL_PRODUCTS: gql`
    query products {
      products {
        imgUrl
        name
        price
        shortDescription
        rating
        id
      }
    }
  `,

  GET_ONE_PRODUCT: gql`
    query product($id: ID!) {
      product(id: $id) {
        imgUrl
        name
        price
        longDescription
        rating
        brand
        options
        sizes
        id
      }
    }
  `
};
