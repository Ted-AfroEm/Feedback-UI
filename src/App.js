function App() {
  const title = "Amenu";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  const commentBlock = (
    <div className="comments">
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container">
      <h1>Hello from the app component {title}</h1>
      {showComments && commentBlock}
    </div>
  );
}

export default App;
