import React, { Component } from 'react';
import axios from 'axios';
import { Card, Spinner, Alert, Button } from 'react-bootstrap';
import styles from './ProductCatlog.module.css';

export default class ProductCatalog extends Component {
  state = {
    products: [],
    isLoading: false,
    error: null,
    page: 0,
  };

  componentDidMount() {
    this.loadProduct();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadProduct();
    }
  }

  loadProduct = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    axios
      .get(`https://dummyjson.com/products?limit=8&page=${page}`)
      .then(({ data }) => {
        this.setState({
          products: data.products,
          isLoading: false,
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoading: false,
        });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { products, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    }

    if (error) {
      return <Alert variant="danger">Oopsy! Something wrong 😐</Alert>;
    }

    return (
      <>
        <div className={styles.container}>
          {products.map(product => (
            <Card style={{ width: '18rem' }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="d-grid gap-2">
          <Button
            className={styles.btn}
            variant="primary"
            size="lg"
            onClick={this.loadMore}
          >
            Load More
          </Button>
        </div>
      </>
    );
  }
}
