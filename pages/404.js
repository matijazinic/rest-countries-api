import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/404.module.css";

export default function Custom404() {
  const router = useRouter();
  return (
    <main className={styles.container}>
      <h1>404 - Page not found!</h1>
      <button onClick={() => router.push("/")}>Go to HOMEPAGE</button>
    </main>
  );
}
