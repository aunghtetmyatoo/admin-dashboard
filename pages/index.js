import * as React from 'react';
import Dashboard from './admin/dashboard';
import NavLayout from "../layouts/NavDrawer";

const Home = () => {
  return (
    <Dashboard />
  )
}

Home.Layout = NavLayout;

export default Home;