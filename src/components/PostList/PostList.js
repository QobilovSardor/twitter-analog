import PostListItem from "../PostListItem/PostListItem";
import './PostList.css';

const PostList = ({posts}) => {
  return (
    <ul className="app-list list-group">
      {posts.map(item => (
        <li className="list-group-item">
          <PostListItem label={item.label} important={item.important}/>
        </li>
      ))}
    </ul> 
  );
};

export default PostList;