import React from "react";
import styles from "../styles/home.module.css";

function HeroSection() {
  return (
    <div className={styles.hero_section}>
      <div className={styles.left_section}>left area for other things</div>
      <div className={styles.med_section}>
        <div className={styles.med_container}>
          <p className={styles.search_text}>Search</p>
          <div className={styles.search_input_div}>
            <input className={styles.search_input} />
            <button className={styles.search_button}>click</button>
          </div>
        </div>{" "}
      </div>
      <div className={styles.right_section}>
        area for results or any other things
      </div>
    </div>
  );
}

export default HeroSection;
