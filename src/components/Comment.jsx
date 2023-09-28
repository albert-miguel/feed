import { Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

export function Comment() {
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
            <button title="delete">
              <Trash size={24}/>
            </button>
          </header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            sunt.
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            liked <span> 20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
