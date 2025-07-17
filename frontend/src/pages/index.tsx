import Product, { getServerSideProps as getProductsSSR } from "./product";

import type { ProductProps } from "./product";

export { getProductsSSR as getServerSideProps };

export default function Home(props: ProductProps) {
  return <Product {...props} />;
}
