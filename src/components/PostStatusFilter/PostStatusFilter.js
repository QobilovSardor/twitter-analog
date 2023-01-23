import React from 'react';

class PostStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { ism: 'all', label: 'All' },
      { ism: 'like', label: 'liked' },
    ];
  }

  render() {
    const buttons = this.buttons.map(({ism, label}) => {
      const active = this.props.filter === ism
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button 
          key={ism} 
          className={`btn ${clazz}`}
          onClick={() => this.props.onFilterSelect(ism)}>
          {label}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

export default PostStatusFilter;