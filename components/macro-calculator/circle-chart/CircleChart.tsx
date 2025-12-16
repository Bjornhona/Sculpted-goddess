import styles from './circleChart.module.scss';

interface CircleChartProps {
  title: string;
  value: number | null;
  result: string | null;
  circumference: number;
  offset: number;
  unit: string;
  resultTitle: string;
}

const CircleChart = ({ title, value, result, circumference, offset, unit, resultTitle }: CircleChartProps) => {
  return (
    <div className={styles.macroCard}>
      <h3>{title}</h3>
      <div className={styles.cardCircle}>
        <div className={styles.percent}>
          <svg
            viewBox="0 0 200 200"
            className={styles.circleChart}
          >
            <circle
              cx="100"
              cy="100"
              r="90"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className={styles.number}>
            <h3>
              <span>{value && value}</span>
            </h3>
            <h3>{unit}</h3>
          </div>
        </div>
        <h3>{resultTitle}</h3>
        <h4>{result && result}</h4>
      </div>
    </div>
  );
};

export default CircleChart;
