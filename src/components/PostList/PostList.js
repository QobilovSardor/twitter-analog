import PostListItem from "../PostListItem/PostListItem";
import './PostList.css';

const PostList = ({post}) => {
  return (
    <ul className="app-list list-group">
      <PostListItem label={post[0].label} important={post[0].important} />
      <PostListItem label={post[1].label} important={post[1].important} />
      <PostListItem label={post[2].label} important={post[2].important} />
    </ul> 
  );
};

export default PostList;