import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css'

const App = () => {

  const data = [
    { label: 'Going to learn React JS', important: true },
    { label: 'Going to learn React JS', important: false },
    { label: 'Going to learn React JS', important: false }
  ]

  return (
    <div className='app'>
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList post={data} />
      <PostAddForm />
    </div>
  );
};

export default App;