import React, { Component } from 'react'

import Changer from "./Changer"

class Book extends Component {
    state = {
        shelfSelection: this.props.book.shelf || "none"
    }

    render() {

        const authors = this.props.book.authers && this.props.book.authors.join(' | ');

        let url = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <button classname='book-cover-button'>
                        onCLick={(e) => this.props.onUpdateQuickView(e, this.props.book)}
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 139,
                                    backgroundImage: url
                                }}></div>
                        </button>
                        <Changer />
                    </div >
                    <div className="book-title">Ender's Game</div>
                    <div className="book-authors">Orson Scott Card</div>
                </div>
            </li >
        )
    }
}



export default Book;



