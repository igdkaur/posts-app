import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [author, setAuthor] = useState();

   function handleChange(event) {
    setAuthor(event.target.value)
   } 


  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>{author}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;