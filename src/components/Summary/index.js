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

  handleCallback(action, price) {
    console.log('LLEGUE AL CALLBACK', action, price)
    const { totalPrice } = this.state;
    const newTotalPrice = action == 'less' ? totalPrice - price : totalPrice + price

    this.setState({
      totalPrice: newTotalPrice
    })
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        {products.map((product, key) => {
          return (
            <Item handleCallback={(action, price) => this.handleCallback(action, price)} data={product} key={key} />
          )
        })}
        <Total totalPrice={totalPrice} />
      </div>
    )
  }
}

export default Summary