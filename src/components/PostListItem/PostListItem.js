import React from 'react';
import './PostListItem.css';

class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      liked: false
    };
    this.onStartHendler = this.onStartHendler.bind(this)
    this.onLikedHendler = this.onLikedHendler.bind(this)
  }

  onStartHendler() {
    this.setState(({important}) => ({important: !important}))
  }

  onLikedHendler() {
    this.setState(({liked}) => ({liked: !liked}))
  }

  render() {
    const { important, liked } = this.state
    const { label } = this.props;
    let classNames = 'app-list-item d-flex justify-content-between'
    if (important) {
      classNames += ' important'
    }
    if (liked) {
      classNames += ' like'
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLikedHendler}>
          {label}
        </span>
        <div className="buttons d-flex justify-content-center align-items-center">
          <button type="submit" className="btn-star btn-sm" onClick={this.onStartHendler}>
            <i className="fa fa-star"></i>
          </button>
          <button type="submit" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}

export default PostListItem;