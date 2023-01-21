import PostListItem from "../PostListItem/PostListItem";
import './PostList.css';

const PostList = ({posts}) => {
  const element = posts.map(item => {
    const {id, ...itemProps} = item
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps}/>
      </li>
    )
  })
  return (
    <ul>
      {element}
    </ul>
  );
};

export default PostList;