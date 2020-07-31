import React from "react";
import Total from "../Total";
import Item from "../Item";

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      products: []
    };
  }

  componentDidMount() {
    let totalPrice = 0;
    const stringifiedProducts = localStorage.getItem("cart");
    if (stringifiedProducts) {
      const products = JSON.parse(stringifiedProducts);
      products.map((product) => {
        totalPrice = totalPrice + product.price;
      });

      this.setState({
        totalPrice: totalPrice,
        products: products
      });
    }
  }

  handleCallback(action, price) {
    const { totalPrice } = this.state;
    const newTotalPrice =
      action == "less" ? totalPrice - price : totalPrice + price;

    this.setState({
      totalPrice: newTotalPrice
    });
  }

  deleteCallback(id) {
    const { products, totalPrice } = this.state;
    let newTotalPrice = totalPrice;

    const filteredProducts = products.filter((product) => {
      if (product.id == id) {
        newTotalPrice = newTotalPrice - product.price;
      }
      return product.id != id;
    });

    this.setState({
      products: filteredProducts,
      totalPrice: newTotalPrice
    });
  }

  render() {
    const { totalPrice, products } = this.state;
    return (
      <div>
        {products.map((product, key) => {
          return (
            <Item
              handleCallback={(action, price) =>
                this.handleCallback(action, price)
              }
              deleteCallback={(id) => this.deleteCallback(id)}
              data={product}
              key={key}
            />
          );
        })}
        <Total totalPrice={totalPrice} />
      </div>
    );
  }
}

export default Summary;
