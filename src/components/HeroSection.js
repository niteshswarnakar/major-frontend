import React from "react";
import styles from "../styles/home.module.css";
import axios from "axios";
import { useState } from "react";

function HeroSection() {
  const [data_demo, setData_Demo] = useState([]);
  async function getResponse() {
    const response = await axios.get("http://localhost:8000/api/second-model/");
    const data = response.data;
    console.log(data);
    setData_Demo(data);
    return data;
  }

  return (
    <div className={styles.hero_section}>
      <div className={styles.left_section}>left area for other things</div>
      <div className={styles.med_section}>
        <div className={styles.med_container}>
          <p className={styles.search_text}>Search</p>
          <h2>
            {data_demo?.map((data) => {
              return <p key={data}>{data}</p>;
            })}
          </h2>
          <div className={styles.search_input_div}>
            <input className={styles.search_input} />
            <button onClick={getResponse} className={styles.search_button}>
              click
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right_section}>
        area for results or any other things
      </div>
    </div>
  );
}

export default HeroSection;
