// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onRightclickArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  activReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div>
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftClickArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[reviewIndex]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="button-container">
          <button
            type="button"
            testid="leftArrow"
            onClick={this.onLeftClickArrow}
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          {this.activReview(currentReviewDetails)}

          <button
            type="button"
            testid="rightArrow"
            onClick={this.onRightClickArrow}
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
