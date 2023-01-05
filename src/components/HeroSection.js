import React from "react";
import styles from "../styles/home.module.css";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

function HeroSection() {
  const [data_demo, setData_Demo] = useState([]);
  const input_text = useRef("");

  // API FUNCTION TO COMMUNICATE WITH BACKEND
  async function getResponse(e) {
    e.preventDefault();
    let text = input_text.current.value;
    try {
      const response = await axios.post(
        "http://localhost:8000/api/second-model/",
        {
          text: text,
        }
      );

      console.log(response.data);
      setData_Demo(response.data);
      return response.data;
    } catch (err) {
      console.log("hamro error - ", err);
    }
  }

  return (
    <div className={styles.hero_section}>
      <div className={styles.left_section}>left area for other things</div>
      <div className={styles.med_section}>
        <div className={styles.med_container}>
          <p className={styles.search_text}>Search</p>
          <div className={styles.float_value}>
            {Array.isArray(data_demo) === true &&
              data_demo?.map((data) => {
                return (
                  <p className={styles.single} key={data}>
                    {data.toFixed(4)}
                  </p>
                );
              })}
          </div>
          <form onClick={getResponse} className={styles.search_input_div}>
            <input
              className={styles.search_input}
              name="text"
              ref={input_text}
            />
            <button type="submit" className={styles.search_button}>
              click
            </button>
          </form>
        </div>
      </div>
      <div className={styles.right_section}>
        area for results or any other things
      </div>
    </div>
  );
}

export default HeroSection;
