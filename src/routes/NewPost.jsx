import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import {Link} from "react-router-dom"

function NewPost() {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  function handleBodyChange(event) {
    setEnteredBody(event.target.value);
  }
  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    console.log(postData);

      // function handleAddPost(postData) {
  //   
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

    onCancel();
  }

  return (
    <Modal>

      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={handleBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={handleAuthorChange} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button" >
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
    );
      
      
}

export default NewPost;


export function action() {
  fetch('http://localhost:8080/posts',{
        method: 'POST',
        body:JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

}