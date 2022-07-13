import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    DashBoard
                </Link>
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="text.primary"
                >
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
        </div>
    );
}
