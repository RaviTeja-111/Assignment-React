import ProductItem from './ProductItem';
import classes from './Products.module.scss';

const dummyData = [{ id: 'p1', title: 'Book1', price: 6, description: "Book Reading is best" },
{ id: 'p2', title: 'Book2', price: 60, description: "Book is Best" }]
const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map(item => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description} />)}
      </ul>
    </section>
  );
};

export default Products;
