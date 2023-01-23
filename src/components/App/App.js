import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React JS', important: false, liked: false, id: 'ab' },
        { label: 'Going to learn Vue JS', important: false, liked: false, id: 'ac' },
        { label: 'Going to learn Angular JS', important: false, liked: false, id: 'ad' },
      ]
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      
      const before = data.splice(0, index);
      const after = data.splice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    })
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const oldItem = data[index]
      const newItem = {...oldItem, important: !oldItem.important}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }
  onToggleLiked(id) {
    
    this.setState(({data}) => {
      const index = data.findIndex(element => element.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, liked: !oldItem.liked};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  render() {
    const liked = this.state.data.filter(item => item.liked).length;
    const allPosts = this.state.data.length
    return (
      <div className='app'>
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className='search-panel d-flex'>
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList 
          posts={this.state.data} 
          onDelete={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}  
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}