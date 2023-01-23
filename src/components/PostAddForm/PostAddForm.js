import './PostAddForm.css'

const PostAddForm = ({onAdd}) => {
  return (
    <div className="bottom-panel d-flex">
      <input type="text" 
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
      />
      <button 
        type="submit" 
        className="btn btn-outline-secondary"
        onClick={() => onAdd('Hello World')}>
        Add Posts
      </button>
    </div>
  );
};

export default PostAddForm;