import React from 'react'
import Slider from 'react-slick'
import products from '../../data/products.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }

  handleClick(product) {
    const stringifiedCart = localStorage.getItem('cart')
    if (stringifiedCart) {
      const parsedCart = JSON.parse(stringifiedCart)
      parsedCart.push(product)
      const newCart = JSON.stringify(parsedCart)
      localStorage.setItem('cart', newCart)
    } else {
      const parsedCart = [product]
      const newCart = JSON.stringify(parsedCart)
      localStorage.setItem('cart', newCart)
    }

    this.props.history.push('/carrito')
  }

  render() {
    return (
      <div>
        <Slider {...this.settings}>
          {products.map((product, key) => {
            return (
              <div onClick={() => this.handleClick(product)} className="slick-box" key={key}>
                <img src={product.img} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default App;