const arr = ['Kim Jon', 'Poili Mathew']

function Post() {
  const randomName = Math.random() > 0.5 ? arr[0] : arr[1];

  return (
    <div>
      <p>{randomName}</p>
      <p>The book needs revision</p>
    </div>
  )
}

export default Post;
