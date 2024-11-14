import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const emojiRepeat = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
  const emojiDisplay = emoji.repeat(emojiRepeat);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{emojiDisplay} {minutes} min read</p>
    </article>
  );
}

export default Article;
