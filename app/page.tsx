import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Puzzles from GCHQ Christmas Card</h1>
      <p>Source: https://www.gchq.gov.uk/news/xmaschallenge2022</p>
      <p>
        Hello 👋 I have taken a couple of games from the GCHQ Xmas challend card
        and turned them into interactive games. I found it a lot easier to
        figure them out 😁
      </p>
      <p>Github repo: https://github.com/atomcorp/gchq</p>
      <ul>
        <li>
          <Link href="/coding">Coding</Link>
        </li>
        <li>
          <Link href="/cyber-security">Cyber Security</Link>
        </li>
      </ul>
    </main>
  );
}
