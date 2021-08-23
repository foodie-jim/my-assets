import { FC } from 'react';
import { Button } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';

interface SupProps {
  message: string;
}

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

const Sup: FC<SupProps> = ({ message }: SupProps) => {
  return (
    <div className={styles.container}>
      <Button color="primary" variant="contained">
        {message}
      </Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      message: 'sup',
    },
  };
};

export default Sup;
