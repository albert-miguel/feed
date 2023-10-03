import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";
import { useState } from "react";

// author : {Avatar_url: "", name: "", role: ""}
// publishedAt : Date
// content: String

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Que projetão hein!!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormat = format(publishedAt, "MMMM d ,hh:mm aaa", {
    locale: enUS,
  });

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithoutDeleteOne)
  }

  // function handleNewCommentInvalid() {
  //   event.target.setCustomValidity('Oi')
  // }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedAt.toISOString()} title={publishedDateFormat}>
          {publishedDateRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }
          if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.form}>
        <strong>Feedback</strong>
        <textarea
          name="comment"
          placeholder="Let your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          // onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>Submit</button>
        </footer>
      </form>
      <div className="commentList">
        {comments.map((com) => {
          return (
            <Comment key={com} content={com} onDeleteComment={deleteComment} />
          );
        })}
      </div>
    </article>
  );
}
