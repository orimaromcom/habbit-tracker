"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./rujum.module.css";

const GaugeComponent  = dynamic(() => import("react-gauge-component"), { ssr: false });

const Rujum = () => {
  const [rujumPercent, setRujumPercent] = useState(0.1);

  const increment = () => {
    if (rujumPercent + 0.1 <= 1) setRujumPercent(rujumPercent + 0.1);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rujum</h2>
      <div onClick={increment}>
      <GaugeComponent
  value={50}
  type="radial"
  labels={{
    tickLabels: {
      type: "inner",
      ticks: [
        { value: 20 },
        { value: 40 },
        { value: 60 },
        { value: 80 },
        { value: 100 }
      ]
    }
  }}
  arc={{
    colorArray: ['#5BE12C','#EA4228'],
    subArcs: [{limit: 30}, {limit: 60}, {}, ],
    padding: 0.02,
    width: 0.3
  }}
  pointer={{
    elastic: true,
    animationDelay: 0
  }}
/>
      </div>
      <div>hello</div>
    </div>
  );
};

export default Rujum;
