import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const [like, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikedComment() {
    setLikeCount(like + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/albert-miguel.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Miguel Albert</strong>
              <time dateTime="2023-09-27" title="27 de setembro às 17:20h">
                Published at 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLikedComment}>
            <ThumbsUp />
            liked <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
