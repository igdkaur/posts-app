import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({isPosting}) {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }
  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }


  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={handleClose}>
        <NewPost
          onBodyChange={handleBodyChange}
          onAuthorChange={handleAuthorChange}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Leo" body="The index needs correction" />
      </ul>
    </>
  );
}

export default PostsList;
