import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import { useTheme } from "next-themes";
import { MoonIcon as MoonEmpty } from "@heroicons/react/24/outline";
import { MoonIcon as MoonFull } from "@heroicons/react/24/solid/";

function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    setTheme(localStorage.getItem("theme"));
  }, []);

  function changeTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }),
    [theme];

  if (!isMounted) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerElements}>
        <h1>Where in the World?</h1>
        <div className={styles.dark} onClick={changeTheme}>
          {theme === "light" ? (
            <MoonEmpty className={styles.darkIcon} />
          ) : (
            <MoonFull className={styles.darkIcon} />
          )}
          <button className={styles.darkButton}>Dark Mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
