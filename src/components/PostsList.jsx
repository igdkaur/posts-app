import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from 'react';


function PostsList() {
  const [enteredBody, setEnteredBody] = useState();

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={handleBodyChange} />
      <ul className={classes.posts}>
        <Post author="Kim" body={enteredBody} />
        <Post author="Leo" body="The index needs correction" />
      </ul>
    </>
  );
}

export default PostsList;
