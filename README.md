# Product Listing

This project is a simple React application that allows users to view list of products and the details. It includes features like displaying a list of products, showing detailed information about a specific product on selection. The project utilizes TypeScript, Material-UI for UI Components and styling, Apollo Client for GraphQL integration, and Jest with React Testing Library for unit testing.

## Project Structure

This structure represents a simple scalable application with a clear separation of concerns. The components directory contains reusable UI components, the pages directory contains page-level components, the routes directory manages the application’s routes, and the services directory handles data fetching and other side effects. The utils directory contains utility functions and constants.

```
product-listing-frontned
├── node_modules
├── public
└── src
    ├── components
    │   ├── common
    │   │   ├── AppLayout.test.tsx
    │   │   ├── AppLayout.tsx
    │   │   ├── constants.ts
    │   │   ├── index.tsx
    │   │   ├── LoadingSpinner.tsx
    │   │   ├── Rating.test.tsx
    │   │   ├── Rating.tsx
    │   │   ├── ToggleButton.test.tsx
    │   │   └── ToggleButton.tsx
    │   └── products
    │       ├── constants.ts
    │       ├── index.tsx
    │       ├── ProductCard.test.tsx
    │       ├── ProductCard.tsx
    │       ├── ProductDetails.test.tsx
    │       ├── ProductDetails.tsx
    │       ├── ProductList.test.tsx
    │       └── ProductList.tsx
    ├── pages
    │   ├── home
    │   │   ├── _snapshots_
    │   │   ├── index.test.tsx
    │   │   └── index.tsx
    │   └── product
    │       ├── _snapshots_
    │       ├── index.test.tsx
    │       └── index.tsx
    ├── routes
    │   ├── index.test.tsx
    │   └── index.tsx
    ├── services
    │   ├── graphql
    │   │   ├── constants.ts
    │   │   └── product.ts
    │   └── rest-api
    ├── utils
    │   ├── helpers.test.ts
    │   ├── helpers.ts
    │   ├── constants.ts
    │   ├── index.css
    │   ├── index.test.ts
    │   └── index.ts
    └── (other files)
└── (other files)
```

## Setup

In the project directory, follow these steps to get started:

1. #### Run app

- Clone this repo
- Intall node version 18 or higher
- Install dependencies with: `yarn install`
- Run the app with: `yarn start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Make sure the backend is running

2. #### Run test

- Run test with: `yarn test`

3. #### Run build

- Run build with: `yarn build`

## Stack

- React 18
- React router v6
- Typescript
- GraphQL
- Apollo Client
- Jest
- React Testing Library
- Functional Components
- Material UI and Material Icons

## Features

- List products
- Product details based on the id selected
- GraphQL Integration using Apollo Client

### Learn More

You can see the app demo video here [Demo Video](https://vimeo.com/897948817/59a8128e0e).

To see the backend repo click [Backend Repo Link](https://reactjs.org/).
