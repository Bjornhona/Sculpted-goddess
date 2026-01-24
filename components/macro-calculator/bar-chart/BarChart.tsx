import styles from "./barChart.module.scss";

export interface BarChartProps {
  nutrient: string;
  percentage: number | null;
}

const BarChart = ({ nutrient, percentage }: BarChartProps) => {
  return (
    <div className={styles.barChart}>
      <h4>{nutrient}</h4>
      <div className={styles.barHolder}>
        <div
          id="bar"
          className={`${styles.bar} ${styles.progress}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BarChart;
