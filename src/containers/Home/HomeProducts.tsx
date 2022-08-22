import Product from './Product';

const HomeProducts = () => {
  return (
    <div className="homeproduct-container" data-testid="homeProducts" >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default HomeProducts;
