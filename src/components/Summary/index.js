import React from 'react'
import Total from '../Total'
import Item from '../Item'
import products from '../../data/products.json'

class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0
    }
  }

  componentDidMount() {
    let totalPrice = 0

    products.map((product) => {
      totalPrice = totalPrice + product.price
    })

    this.setState({
      totalPrice: totalPrice
    })
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        {products.map((product, key) => {
          return (
            <Item data={product} key={key} />
          )
        })}
        <Total totalPrice={totalPrice} />
      </div>
    )
  }
}

export default Summary