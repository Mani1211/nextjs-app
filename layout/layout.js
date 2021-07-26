import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <img src="/travelon.jpg" className={styles.logo} />
        <div>
          <ul className={styles.navlist}>
            <li className={styles.navitem}>Home</li>
            <li className={styles.navitem}>ABout Us</li>
            <li className={styles.navitem}>Contact</li>
            <li className={styles.navitem}>Login/Sign Up</li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className={styles.footer}>
        <h1> &#169;travel on limited</h1>
      </footer>
    </div>
  );
};

export default Layout;
