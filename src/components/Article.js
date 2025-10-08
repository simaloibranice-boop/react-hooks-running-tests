function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
