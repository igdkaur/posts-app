import Post from "./Post";

function PostsList() {
  return (
    <ul>
      <Post author="Kim" body="The book needs revision" />
      <Post author="Leo" body="The index needs correction" />
    </ul>
  );
}

export default PostsList;
