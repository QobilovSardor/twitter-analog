import PostListItem from "../PostListItem/PostListItem";
import './PostList.css';

const PostList = ({posts, onDelete}) => {
  const element = posts.map(item => {
    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={() => onDelete(id)}/>
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