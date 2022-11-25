import React from 'react'
import styles from "./_Corosal.module.css"
import CarosalImage from "../../assets/Carosal_image.png"

const Corosal = () => {
  return (
    <section className={styles.CorosalBlock}>
          <aside id={styles.CorosalBlockleft}>
              <img src={CarosalImage} alt="carosalImage" />
        </aside>
        <aside id={styles.CorosalBlockRight}></aside>
    </section>
  );
}

export default Corosal
