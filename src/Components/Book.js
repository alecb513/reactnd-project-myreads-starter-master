import React, { Component } from 'react'

import Changer from "./Changer"

class Book extends Component {
    state = {
        shelfSelection: this.props.book.shelf || "none"
    }

    render() {

        const authors = this.props.book.authors && this.props.book.authors.join(' | ');

        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

        return (
                <div className="book">
                    <div className="book-top">
                        <button className='book-cover-button'>
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 139,
                                    backgroundImage: url
                                }}></div>
                        </button>
                        <Changer book={this.props.book} onChangeShelf={this.props.onChangeShelf}/>
                    </div >
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
        )
    }
}

export default Book;



