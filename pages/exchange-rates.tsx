import { FC } from 'react';
import { Button } from '@material-ui/core';
import { GetServerSideProps } from 'next';

interface SupProps {
  message: string;
}

// TODO: use material-ui classes, layout.. not Home.modul.css ...
// https://material-ui.com/components/drawers/#mini-variant-drawer

const ExchangeRates: FC<SupProps> = ({ message }: SupProps) => {
  return (
    <div>
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

export default ExchangeRates;
