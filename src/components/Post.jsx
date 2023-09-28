import { Avatar } from './Avatar';
import {Comment } from './Comment'

import styles from "./Post.module.css";

// author : {Avatar_url: "", name: "", role: ""}
// publishedAt : Date
// content: String


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/88360778?v=4" />
          <div className={styles.authorInfo}>
            <strong>Miguel Albert</strong>
            <span>Developer</span>
          </div>
        </div>
        <time dateTime="2023-09-27" title="27 de setembro às 15:17h">
          Published at 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello guys</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          recusandae corrupti, repellat minus commodi consequatur quos dolorum
          quam. Eum porro facilis eaque iure dolorem incidunt necessitatibus
          magnam. Molestiae, error ipsum?
        </p>
        <p>
          <a href="http://github.com/albert-miguel.com">
            👉🏼 github.com/albert-miguel.com
          </a>
        </p>
        <p>
          <a href="#">#NewProject </a>
          <a href="#">#ReactProject</a>
        </p>
      </div>

      <form className={styles.form}>
        <strong>Let your feedback</strong>
        <textarea placeholder="Let your comment" />
        <footer>
          <button type="submit">Submit</button>
        </footer>
      </form>
      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
