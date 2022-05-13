import React, { Component } from 'react'
import { storeProducts, productDetail } from '../services/fakeProductService';
import { getGenres } from '../services/fakeGenreService';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: productDetail,
    cart: [],
    // JSON.parse(localStorage.getItem('cart') || '[]'),
    modalOpen: false,
    modalProduct: productDetail,
    marks : [],
    selectedBrand: '',
    filtered: [],
    itemsCount: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
    const marks = [{name: 'All Genres'}, ...getGenres()]
    this.setState({marks})

    // localStorage for cartItems
    const cart = localStorage.getItem('cart')
    const items = JSON.parse(cart) || []
    this.setState(() => ({ cart: items }))
    // localStorage for itemCount
    const itemsCount = localStorage.getItem('itemsCount')
    const itemsNum = JSON.parse(itemsCount) || 0
    this.setState(() => ({ itemsCount: itemsNum }))
    // localStorage for cart Subtotal
    const subtotal = localStorage.getItem('subtotal')
    const subtotalPrice = JSON.parse(subtotal) || 0
    this.setState(() => ({ cartSubTotal: subtotalPrice }))
    // localStorage for cart Subtotal
    const tax = localStorage.getItem('tax')
    const cartTax = JSON.parse(tax) || 0
    this.setState(() => ({ cartTax: cartTax }))
    // localStorage for Total
    const Total = localStorage.getItem('Total')
    const CartTotal = JSON.parse(Total) || 0
    this.setState(() => ({ cartTotal: CartTotal }))
  }

  componentDidUpdate(prevProps, prevStates) {
      const cart = JSON.stringify(this.state.cart)
      localStorage.setItem('cart', cart)

      const itemsCount = JSON.stringify(this.state.itemsCount)
      localStorage.setItem('itemsCount', itemsCount)

      // this is localStorage
      const cartSubtotal = JSON.stringify(this.state.cartSubTotal)
      localStorage.setItem('subtotal', cartSubtotal)

      const cartTax = JSON.stringify(this.state.cartTax)
      localStorage.setItem('tax', cartTax)

      const cartTotal = JSON.stringify(this.state.cartTotal)
      localStorage.setItem('Total', cartTotal)


  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  handleBrandSelect = (mark) => {
    this.setState({ selectedBrand: mark})
  }

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.incart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product },
        itemsCount: this.state.itemsCount + 1
      };
    }, this.addTotals);
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart],
        itemsCount: this.state.itemsCount + 1
      };
    }, this.addTotals);
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return {
            cart: [...tempCart],
            itemsCount: this.state.itemsCount - 1
        };
      }, this.addTotals);
    }
  };

  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    return {
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.incart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
        itemsCount: this.state.itemsCount - 1
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
           cart: [],
           itemsCount: 0,
           cartSubTotal: 0,
           cartTax: 0,
           cartTotal: 0
        };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
        const filtered = this.state.selectedBrand && this.state.selectedBrand._id
            ? this.state.products.filter(p => p.company._id === this.state.selectedBrand._id)
            : this.state.products;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filtered: filtered,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleBrandSelect: this.handleBrandSelect
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
