import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.attribution}>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/matijazinic/"
            target="_blank"
            rel="noreferrer"
          >
            Matija Zinic
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
