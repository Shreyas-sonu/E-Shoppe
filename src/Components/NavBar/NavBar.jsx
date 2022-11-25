import React from "react";
import styles from "./navBar.module.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <section className={styles.NavBar}>
      <article id={styles.navBarContainer}>
        <aside id={styles.logo}>
          <Link to="">
            <img src={Logo} />
          </Link>
        </aside>
        <aside className={styles.menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>
              <Link to="/">Women Us</Link>
            </li>
            <li>
              <Link to="/">Kids</Link>
            </li>
          </ul>
        </aside>
        <aside className={styles.otherItems}>
          <div id={styles.searchIcon}>
            <span>
              <CiSearch />
            </span>
            <input type="search" />
          </div>
          <div id={styles.CratList}>
            <Link>
              <FiShoppingCart />
            </Link>
            <Link>
              <AiOutlineHeart />
            </Link>
          </div>
          <div id={styles.account}>
            <button>Login</button>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default NavBar;
