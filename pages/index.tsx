import Head from "next/head";
import Image from "next/image";

import Card from "../components/Card";
import { PostInput } from "../components/Inputs";
import styles from "../styles/Home.module.css";
import classNames from "classnames";
import PostCard from "../components/PostCard";
import usePostsStore from "../state/posts";
import { openSans } from "../shared/fonts";

export default function Home() {
  // TODO: change to get from usePostsStore
  const posts = usePostsStore((state) => state.posts);
  return (
    <div className={classNames(styles.container, openSans.className)}>
      <Head>
        <title>eFuse + Fred C.</title>
        <meta name="description" content="A worksample of the utmost quality" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Card size="small">
            <PostInput />
          </Card>
        </div>
        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <PostCard post={post} key={`post-${idx}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
