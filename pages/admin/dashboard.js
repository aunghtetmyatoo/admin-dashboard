import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import NavLayout from "../../layouts/NavDrawer";
import styles from "./dashboard.module.css";
import DoughnutChart from "../../charts/DoughnutChart";
import LineChart from "../../charts/LineChart";
import TopCard from "../../components/Dashboard/TopCard";
import HorizontalBarChart from "../../charts/HorizontalBarChart";
import PolarAreaChart from "../../charts/PolarAreaChart";


export default function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1, p: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Box className={styles.card}>
                        <TopCard title="Sales" body="$230,220" base="+55% " />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={styles.card}>
                        <TopCard title="Customers" body="3.200" base="+12% " />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={styles.card}>
                        <TopCard title="Avg. Revenue" body="$1.200" base="+$213 " />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={styles.card}>
                        <DoughnutChart />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className={styles.card}>
                        <LineChart />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className={styles.card}>
                        <HorizontalBarChart />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={styles.card}>
                        <PolarAreaChart />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

Dashboard.Layout = NavLayout;
