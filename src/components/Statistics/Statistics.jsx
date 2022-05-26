import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={s.statisticsItem}>Good: {good}</li>
    <li className={s.statisticsItem}>Neutral: {neutral}</li>
    <li className={s.statisticsItem}>Bad: {bad}</li>
    <li className={s.statisticsItem}>Total: {total}</li>
    <li className={s.statisticsItem}>
      Positive feedback: {positivePercentage.toFixed(2)}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
