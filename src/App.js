import React from 'react'
import * as BooksAPI from './BooksAPI'
import * as BookUtils from './BookUtils';

import './App.css'
import BookCase from './Components/BookCase';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount = () => {
    if (this.state.newBook) {
      this.refeshAllBooks();
    }
  }

  refeshAllBooks = () => {
    BooksAPI
      .getAll()
      .then((list) => {
        this.setState({
          books: BookUtils.sortAllBooks(list),
          newBook: false
        });
      });
  }
  

  changeShelf = (book, shelf) => {

    BooksAPI
      .update(book, shelf)
      .then(response => {
        let newList = this
          .state
          .books
          .slice(0);
         

        const books = newList.filter(listBook => listBook.id === book.id);
        if (books.length) {
          books[0].shelf = shelf;
        } else {
          newList.push(book);
          newList = BookUtils.sortAllBooks(newList);
        }
        this.setState({ books: newList });
      })
  }

  render() {

    return (<BookCase books={this.state.books}
    onRefreshAllBooks={this.refeshAllBooks}
    onChangeShelf ={this.changeShelf}/>)

  }
}

export default BooksApp
