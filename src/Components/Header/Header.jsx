import React from "react";
import Corosal from "../Corosal/Corosal";
import NavBar from "../NavBar/NavBar";
import styles  from "./_Header.module.css"

const Header = () => {
    return <section className={styles.Header}>
        <NavBar/>
        <Corosal/>
  </section>;
};

export default Header;
