import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import "./global.css";

// author : {Avatar_url: "", name: "", role: ""}
// publishedAt : Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/albert-miguel.png',
      name: 'Miguel Albert',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Hello guys'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque'},
      {type: 'link', content: '👉🏼 github.com/albert-miguel'},
    ],
    publishedAt: new Date('2023-09-27 22:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/portodotvic.png',
      name: 'Porto LOL',
      role: 'Design',
    },
    content: [
      {type: 'paragraph', content: 'Hello guys'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque'},
      {type: 'link', content: '👉🏼 github.com/albert-miguel'},
    ],
    publishedAt: new Date('2023-09-27 22:55:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => <Post />)}
        </main>
      </div>
    </div>
  );
}
