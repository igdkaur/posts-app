import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function handleAddPost(postData) {
    // setPosts([postData, ...post]);
    // setPosts((existingPosts) => {
    //   [postData, ...existingPosts]
    // })
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={handleAddPost}/>
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        {/* {posts.map((post) => {
           <Post author={post.author} body={post.body}/> 
        })} */}
        {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
      </ul>
    </>
  );
}

export default PostsList;
