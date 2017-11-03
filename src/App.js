import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

// components
import Header from './components/header/Header.jsx';
import Books from './components/books/Books.jsx';
import SearchInput from './components/search/SearchInput.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      text: 'Harry Potter'
    }
  }

  componentDidMount() {
    this.getBooks();
  }

 getBooks() {
   axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.state.text)
    .then((response) => {
      this.setState({ books: response.data.items }, () => {
        console.log(this.state)
      })
    })
    .catch((error) => {
      console.log("An error has occured: " +error)
    })
 }

 handleChange(text) {
   this.setState({ text: text}, this.getBooks());
 }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Col xs={12} md={12} lg={12}>
            <SearchInput onChange={this.handleChange.bind(this)} value={this.state.text}/>
            <Books books={this.state.books}/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
