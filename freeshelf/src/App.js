import React from 'react'
import data from './books.json'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showContent: false,
      selectedBooks: []
    }
    this.hideOrShow = this.hideOrShow.bind(this)
  }

  hideOrShow (event) {
    if (this.state.selectedBooks.includes(parseInt(event.target.parentElement.id))) {
      this.setState({
        showContent: false,
        selectedBooks: this.state.selectedBooks.filter(id => id !== parseInt(event.target.parentElement.id))
      })
    } else {
      this.setState({
        showContent: !this.state.selectedBooks.includes(parseInt(event.target.parentElement.id)),
        selectedBooks: [...this.state.selectedBooks, parseInt(event.target.parentElement.id)]
      })
    }
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <h1>Freeshelf</h1>

        {data.map(({
          title,
          author,
          shortDescription,
          url,
          publisher,
          publicationDate,
          detailedDescription,
          coverImageUrl
        }, index
        ) => {
          return (<div key={index} id={index}>

            
              <h1 className='title'>{title}</h1>
              <img src={coverImageUrl} className='image' />
              <p className='author'><strong>By: {author}</strong></p>
              <p className='description'>{shortDescription}</p>

              <button onClick={(event) => this.hideOrShow(event)}> {this.state.showContent && this.state.selectedBooks.includes(index) ? 'Less Info' : 'More Info'}
              </button>

              {this.state.selectedBooks.includes(index) && (<div className='details'>
                <p className='url'> <strong>URL: </strong>{url}</p>
                <p className='publisher'><strong>Publisher: </strong>{publisher}</p>
                <p className='publication'><strong>Publication Date: </strong>{publicationDate}</p>
                <p className='fullDescrip'><strong>Full Description: </strong>{detailedDescription}</p>
              </div>)

              }

          </div>)
        }
        )}
      </div>
    )
  }
}

export default App
