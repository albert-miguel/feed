import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {/* <img src="https://avatars.githubusercontent.com/u/88360778?v=4" /> */}

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/88360778?v=4"
        />
        <strong>Miguel Albert</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quo
          pariatur dignissimos repudiandae.
        </p>
      </footer>
    </aside>
  );
}
