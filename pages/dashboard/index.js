import { DashBoardLayout } from "layout";
import Head from "next/head";
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Sign in Diagnostics Dashboard - Kaivee Healthcare</title>
        <meta
          name="description"
          content="Sign in to your health account and track your tests, sample collection and report status - Dashboard"
        />
      </Head>
      <div>
        <DashBoardLayout />
      </div>
    </>
  );
};

export default Dashboard;
