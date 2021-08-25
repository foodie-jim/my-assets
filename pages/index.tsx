import { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>my-assets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
