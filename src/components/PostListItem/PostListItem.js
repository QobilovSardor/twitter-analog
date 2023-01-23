import React from 'react';
import './PostListItem.css';

function PostListItem(props) {

  const { label, onDelete, onToggleImportant, onToggleLiked, important, liked } = props;
  let classNames = 'app-list-item d-flex justify-content-between'
  if (important) {
    classNames += ' important'
  }
  if (liked) {
    classNames += ' like'
  }
  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {label}
      </span>
      <div className="buttons d-flex justify-content-center align-items-center">
        <button type="submit" className="btn-star btn-sm" onClick={onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button 
          type="submit" 
          className="btn-trash btn-sm"
          onClick={onDelete}  
        >
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}

export default PostListItem;