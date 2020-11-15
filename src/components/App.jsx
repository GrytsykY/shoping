import React, { Component } from 'react'
import {Container, Card} from 'semantic-ui-react'
import axios from 'axios';

import Menu from '../containers/Menu'
import BookCard from '../containers/BookCart'
import Filter from '../containers/Filter'


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }

  render() {
    const { books, isReady, setFilter } = this.props;
    return (
      <Container>
        <Menu />
        <Filter setFilter={setFilter}/>
        <Card.Group>
          { 
            !isReady ? 'Загрузка...' :
            books.map((book,i) => <BookCard key={i} {...book}/>)
          }
        </Card.Group>
      </Container>
    )
  }
}

export default App;
