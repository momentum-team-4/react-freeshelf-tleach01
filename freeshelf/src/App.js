import React from 'react'
import data from './books.json'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.hideOrShow = this.hideOrShow.bind(this)
    this.state = {
      showContent: false
    }
  }

  hideOrShow (event) {
    event.preventDefault()
    this.setState({
      showContent: false
    })
  }

  render () {
    const { showContent } = this.state
    return (
      <div>
        <h1>Freeshelf</h1>
        <link href='https://fonts.googleapis.com/css2?family=Gentium+Book+Basic&display=swap' rel='stylesheet' />
        {data.map((bookDetail, index) => <div key={data.id} className='wholeBook'>
          <div className='bookContent'>
            <div>
              <h1 className='title'>{bookDetail.title}</h1>
              <img src={bookDetail.coverImageUrl} className='image' />
              <p className='author'><strong>By: {bookDetail.author}</strong></p>
              <p className='description'>{bookDetail.shortDescription}</p>
              <div className='dropdownBox'>
                {showContent === true ? <p>{bookDetail.dropdownBox}</p> : ''}
                <button handleclick={this.toggleContent}>Read More</button>
                <button handleclick={this.onhandleRemoveContentButton}>Read Less</button>
                <p className='url'> <strong>URL: </strong>{bookDetail.url}</p>
                <p className='publisher'><strong>Publisher: </strong>{bookDetail.publisher}</p>
                <p className='publication'><strong>Publication Date: </strong>{bookDetail.publicationDate}</p>
                <p className='fullDescrip'><strong>Full Description: </strong>{bookDetail.detailedDescription}</p>
              </div>
            </div>
          </div>

        </div>)}

      </div>
    )
  }
}

export default App
