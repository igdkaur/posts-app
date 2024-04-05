import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Kim" body="The book needs revision" />
      <Post author="Leo" body="The index needs correction" />
    </ul>
  );
}

export default PostsList;
