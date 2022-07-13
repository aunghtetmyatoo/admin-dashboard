import { Typography } from "@mui/material";
import styles from "./TopCard.module.css";

export default function TopCard(props) {
  const { title, body, base } = props;
  return (
    <div className={styles.container}>
      <Typography className={styles.title}>
        {title}
      </Typography>
      <Typography className={styles.body}>
        {body}
      </Typography>
      <Typography className={styles.base}>
        <span className={styles.base_span}>{base}</span> since last month
      </Typography>
    </div>
  )
}
